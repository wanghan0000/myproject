
import { _decorator, Component, Node, AudioSource } from 'cc';
import { ResMgr } from '../UIFrame/ResMgr';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = AudioMgr
 * DateTime = Wed Sep 01 2021 12:24:36 GMT+0800 (中国标准时间)
 * Author = shawngao
 * FileBasename = AudioMgr.ts
 * FileBasenameNoExtension = AudioMgr
 * URL = db://assets/ScriptCore/audio/AudioMgr.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
 *
 */
 
@ccclass('AudioMgr')
export class AudioMgr extends Component {

    @property(AudioSource)
    public audioSource: AudioSource | null = null;
    @property(AudioSource)
    public asForLongSound: AudioSource | null = null;

    private static instance:AudioMgr | null = null;

    
    public static getInstance():AudioMgr{
        return this.instance!;
    }


    onLoad(){
        if (AudioMgr.instance == null){
            AudioMgr.instance = this;
        }else{
            this.destroy();
            return;
        }
        this.loadStorage();
    }

    start () {
        
    }

    //当前正在播放的音乐
    private curMusic:string = "";

    //背景音乐默认循环播放
    public playMusic(musicPath:string,isLoop:boolean = true){
        if (musicPath == this.curMusic){
            console.warn(`当前正在播放${musicPath}`);
            return;
        }
        if(this.curMusic != ""){
            this.audioSource!.stop();
        }
        this.curMusic = musicPath;
        if(!this.isMusicOn){
            return;
        }
        this.forcePlayMusic(this.curMusic,isLoop);
    }

    //开始播放音乐
    private forcePlayMusic(musicPath:string,isLoop:boolean = true){
        let clip = ResMgr.getInstance().getAudioClipByPath(musicPath);
        if (clip == null){
            console.error(`不存在或者没有加载${musicPath}对应的背景音乐资源`);
            return;
        }
        
        this.audioSource!.clip = clip;
        this.audioSource!.loop = isLoop;
        this.audioSource!.play();
    }

    //播放音效 音效不循环播放
    public playSound(soundPath:string){
        if(!this.isSoundOn){
            return;
        }
        let clip = ResMgr.getInstance().getAudioClipByPath(soundPath)!;
        if(clip == null){
            console.error(`不存在或者没有加载${soundPath}音频资源`);
            return;
        }
        this.audioSource?.playOneShot(clip,this.soundVolume); //这种方式无法在播放中停止音效
    }

    //有些长音效需要在切换场景时停止，所以需要一个单独的AudioSource来播放
    //如果和背景音乐共用一个AudioSource，播放一个新的clip会导致原来的clip无法停止
    public playLongSound(soundPath: string) {
        if(!this.isSoundOn){
            return;
        }
        let clip = ResMgr.getInstance().getAudioClipByPath(soundPath);
        if(clip == null){
            console.error(`不存在或者没有加载${soundPath}音频资源`);
            return;
        }
        this.asForLongSound.clip = clip;
        this.asForLongSound.loop = false;
        this.asForLongSound.play();
    }

    //判定音乐是开打开
    public chkIsMusic():boolean{
        return this.isMusicOn;
    }

    //判定声音是否开关
    public chkIsSound():boolean{
        return this.isSoundOn;
    }

    //默认音量为1音乐和音效全部开启
    private soundVolume:number = 1;
    private musicVolume:number = 1;
    private isSoundOn:boolean = true;
    private isMusicOn:boolean = true;
    private currIsShake = true;
    //获取声音的大小
    public getSoundVolume():number{
        return this.soundVolume;
    }   
    //设置声音的大小
    public setSoundVolume(vol:number):void{
        vol = Number(vol.toFixed(1));
        if(vol <=0){
            vol = 0;
        }
        if(vol >=1){
            vol = 1;
        }
        this.soundVolume = vol;
        localStorage.setItem("win88_soundVolume",this.soundVolume.toString());
    }

    //设置背景音效的大小
    public setMusicVolume(vol:number):void{
        vol = Number(vol.toFixed(1));
        if(vol <=0){
            vol = 0;
        }
        if(vol >=1){
            vol = 1;
        }
        this.musicVolume = vol;
        localStorage.setItem("win88_musicVolume",this.musicVolume.toString());
        this.audioSource!.volume = this.musicVolume;
    }

    public getMusicVolume(){
        return this.musicVolume;
    }

    //获取背景音效的大小

    public setIsShake(isShake:boolean){
        this.currIsShake = isShake;
        localStorage.setItem("win88_isShake",(this.currIsShake?1:0).toString());
    }

    public getIsShake(){
        return this.currIsShake;
    }

    /*
    从本地加载当前的音乐开关状态和音量大小
    */
    private loadStorage(){
        let musicOn = localStorage.getItem("win88_backgroundmusic");
        if (musicOn == null || musicOn == ""){
            this.isMusicOn = true;
        }
        if(musicOn == "off"){
            this.isMusicOn = false;
        }

        let soundOn = localStorage.getItem("win88_sound");
        if(soundOn == null || soundOn == ""){
            this.isSoundOn = true;
        }
        if(soundOn == "off"){
            this.isSoundOn = false;
        }
        //声音的转换
        let sVolume = localStorage.getItem("win88_soundVolume");
        if(sVolume == null || sVolume == "" || sVolume == "1.0"){
            this.soundVolume = 1;
        }else{
            let reg = /^0.[0-9]$/;
            if (reg.test(sVolume)){
                this.soundVolume = Number(sVolume);
            }
        }

        let SMusic = localStorage.getItem("win88_musicVolume");
        if(SMusic == null || SMusic == "" || SMusic == "1.0"){
            this.musicVolume = 1;
        }else{
            let reg = /^0.[0-9]$/;
            if(reg.test(SMusic)){
                this.musicVolume = Number(SMusic);
            }
        }

        this.audioSource!.volume = this.musicVolume;
    }


    //打开关闭背景音乐
    public switchMusic(isOn:boolean){
        this.isMusicOn = isOn;
        if(this.isMusicOn){
            //this.playMusic(this.curMusic);
            this.forcePlayMusic(this.curMusic);
            localStorage.setItem("win88_backgroundmusic","on");
        }else{
            this.audioSource!.stop();
            localStorage.setItem("win88_backgroundmusic","off");
        }
    }

    public switchSound(isOn:boolean){
        this.isSoundOn = isOn;
        if(this.isSoundOn){
            localStorage.setItem("win88_sound","on");
        }else{
            this.asForLongSound.stop();
            localStorage.setItem("win88_sound","off");
        }
    }
     
    public getAudioSource(): AudioSource {
        return this.audioSource;
    }

    public getAsForLongSound(): AudioSource {
        return this.asForLongSound;
    }

    public stopAudio() {
        if (this.audioSource != null && this.audioSource.playing) {
            this.audioSource.stop();
        }
        this.stopLongSound();
    }

    public stopLongSound() {
        if (this.asForLongSound != null && this.asForLongSound.playing) {
            this.asForLongSound.stop();
        }
    }
    
    public stopMusic(musicPath:string){
        if(musicPath == this.curMusic){
            this.audioSource.stop();
        }
        this.curMusic = "";
    }
}
