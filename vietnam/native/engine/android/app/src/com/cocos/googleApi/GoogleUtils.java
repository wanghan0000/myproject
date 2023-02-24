package com.cocos.googleApi;


import android.app.Activity;
import android.app.AlertDialog;
import android.content.Intent;
import android.net.Uri;
import android.util.Log;

import com.google.android.gms.auth.api.signin.GoogleSignIn;
import com.google.android.gms.auth.api.signin.GoogleSignInAccount;
import com.google.android.gms.auth.api.signin.GoogleSignInClient;
import com.google.android.gms.auth.api.signin.GoogleSignInOptions;
import com.google.android.gms.common.api.ApiException;
import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;

import com.cocos.lib.JsbBridgeWrapper;


import org.json.JSONArray;
import org.json.JSONObject;

import java.util.HashMap;
import java.util.Map;


public class GoogleUtils {
    private String  m_actTag ="GoogleUtils";
    private String  m_googleLoginCallBack="";
    private String client_id = "170586358645-sgvhf1c5d0en6fsif2sncv7dlupks7cn.apps.googleusercontent.com";
    private Activity m_activity=null;
    private static final int SIGN_LOGIN = 901;

    private GoogleSignInClient mGoogleSignInClient;
    private static GoogleUtils g_Instace = null;
    private JsbBridgeWrapper jbw;

    public static GoogleUtils getInstance() {
        if (null == g_Instace) {
            g_Instace = new GoogleUtils();
        }
        return g_Instace;
    }

    public Intent getGoogleIntent() {
        Intent signInInten;
        signInInten = mGoogleSignInClient.getSignInIntent();
        return signInInten;
    }

    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        if(mGoogleSignInClient != null) {
            switch (requestCode) {
                case SIGN_LOGIN:
                    Log.d(m_actTag,"setActivityResultGoogle");
                    Task<GoogleSignInAccount> task = GoogleSignIn.getSignedInAccountFromIntent(data);
                    if (task == null) {
                        Log.d(m_actTag,"task：null");
                    }
                    try {
                        GoogleSignInAccount account = task.getResult(ApiException.class);
                        Log.d(m_actTag,"Id:" + account.getId() + "|Email:" + account.getEmail() + "|IdToken:" + account.getIdToken());
                        String personName = account.getDisplayName();
                        String personGivenName = account.getGivenName();
                        String personFamilyName = account.getFamilyName();
                        String personEmail = account.getEmail();
                        String personId = account.getId();
                        String token = account.getIdToken();
                        Uri personPhoto = account.getPhotoUrl();

                        Map<String,String> map = new HashMap<String, String>();
                        map.put("result", "22");
                        map.put("info", "google info success");
                        map.put("id", personId);
                        map.put("token", token);
                        map.put("Email", personEmail);
                        map.put("firstName", personGivenName);
                        map.put("lastName", personFamilyName);
                        map.put("userName", personName);
//                        Native.nativeToLogic(m_googleLoginCallBack,map);


                        JSONObject jsonObject = new JSONObject(map);
                        String str = jsonObject.toString();

//                        new  AlertDialog.Builder(m_activity)
//                                .setTitle("提示" )
//                                .setMessage("登录成功" )
//                                .setPositiveButton("确定" ,  null )
//                                .show();

                        jbw.dispatchEventToScript(m_googleLoginCallBack,str);

                    } catch (ApiException e) {
                        e.printStackTrace();
                        Log.d(m_actTag,"ApiException:" + e.getMessage());
                        Log.e(m_actTag, "google login error:" + e.getMessage());
                        Map<String,String> map = new HashMap<String, String>();
                        map.put("result", "21");
                        map.put("info", e.getMessage());

                        JSONObject jsonObject = new JSONObject(map);
                        String str = jsonObject.toString();

//                        new  AlertDialog.Builder(m_activity)
//                                .setTitle("提示" )
//                                .setMessage("登录失败" )
//                                .setPositiveButton("确定" ,  null )
//                                .show();
                        Log.d(m_actTag,"error!!!!!");
//                        Native.nativeToLogic(m_googleLoginCallBack,map);
                        jbw.dispatchEventToScript(m_googleLoginCallBack,str);
                    }
                    break;
            }
        }
    }

    public  void loginGoogle(final String callback){
        Log.i("aaaa", "loginGoogle: is called!!! GOOGLE LOGIN===");
        m_googleLoginCallBack = callback;
        m_activity.startActivityForResult(getGoogleIntent(), SIGN_LOGIN);
    }

    public void logOutGoogle() {
        if(mGoogleSignInClient != null) {
            mGoogleSignInClient.signOut();
            Log.d(m_actTag, "signOut()");
            mGoogleSignInClient.signOut().addOnCompleteListener(m_activity,
                    new OnCompleteListener<Void>() {
                        @Override
                        public void onComplete(Task<Void> task) {
                            if (task.isSuccessful()) {
                                Log.d(m_actTag, "signOut(): success");
                                new  AlertDialog.Builder(m_activity)
                                        .setTitle("提示" )
                                        .setMessage("退出登录成功" )
                                        .setPositiveButton("确定" ,  null )
                                        .show();
                                jbw.dispatchEventToScript("logoutGoogleCall","1");
                            } else {
                                Log.d(m_actTag, "signOut(): failure");
                                new  AlertDialog.Builder(m_activity)
                                        .setTitle("提示" )
                                        .setMessage("退出登录失败" )
                                        .setPositiveButton("确定" ,  null )
                                        .show();
                                jbw.dispatchEventToScript("logoutGoogleCall","0");
                            }
                        }
                    });
        }
    }

    public void initSDK(final Activity activity,final JsbBridgeWrapper jbws){
        //初始化绑定函数
        if (jbw == null) {
            jbw = jbws;
            //登录请求
            jbw.addScriptEventListener("loginGoogle", arg ->{
                System.out.print("@JAVA: here is the argument transport in" + arg);
               this.loginGoogle("loginGoogleCall");
            });
            //退出请求
            jbw.addScriptEventListener("logOutGoogle", arg ->{
                System.out.print("@JAVA: here is the argument transport in" + arg);
                this.logOutGoogle( );
            });
        }

        m_activity = activity;
        if (mGoogleSignInClient == null) {
            GoogleSignInOptions gso = new GoogleSignInOptions.Builder(GoogleSignInOptions
                    .DEFAULT_SIGN_IN)
                    .requestEmail()
                    .requestIdToken(client_id)
                    .build();
            mGoogleSignInClient = GoogleSignIn.getClient(m_activity, gso);
        }
    }
}


