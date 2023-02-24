package com.cocos.facebookApi;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.Intent;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.net.Uri;
import android.os.Bundle;
import android.util.Log;

import com.cocos.lib.JsbBridgeWrapper;
import com.facebook.AccessToken;
import com.facebook.CallbackManager;
import com.facebook.FacebookCallback;
import com.facebook.FacebookException;
import com.facebook.GraphRequest;
import com.facebook.GraphResponse;
import com.facebook.login.LoginManager;
import com.facebook.login.LoginResult;
import com.facebook.share.Sharer;
import com.facebook.share.model.ShareLinkContent;
import com.facebook.share.model.SharePhoto;
import com.facebook.share.model.SharePhotoContent;
import com.facebook.share.widget.ShareDialog;

import com.cocos.lib.CocosHelper;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.Arrays;
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;


public class FacebookSdk {
    private static String TAG = "FacebookSdk";
    private static FacebookSdk mInstance = null;
    private Activity mActivity = null;
    private CallbackManager mCallbackManager = null;
    private ShareDialog mShareDialog = null;
    private JsbBridgeWrapper jbw;

    public static FacebookSdk getInstance() {
        if (null == mInstance) {
            mInstance = new FacebookSdk();
        }
        return mInstance;
    }

    /**
     *  监听 onActivityResult
     */
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        Log.i(TAG, "onActivityResult data = " + data.toString());

        if (mCallbackManager != null) {
            mCallbackManager.onActivityResult(requestCode, resultCode, data);
        }
    }

    /**
     *  初始化
     */
    public void initSdk(Activity activity,final JsbBridgeWrapper jbws) {
        Log.i(TAG, "initSdk");

        mActivity = activity;
        jbw = jbws;
        //登录请求
        jbw.addScriptEventListener("loginFaceBook", arg ->{
            System.out.print("@JAVA: here is the argument transport in" + arg);
            this.login();
        });
        //退出请求
        jbw.addScriptEventListener("logOutFaceBook", arg ->{
            System.out.print("@JAVA: here is the argument transport in" + arg);
            jbw.dispatchEventToScript("logoutFaceBookCall", "1");
            this.logout( );
        });
        mCallbackManager = CallbackManager.Factory.create();

        initLogin();
        initShare();
    }

    /**
     *  初始化登录
     */
    private void initLogin() {
        Log.i(TAG, "initLogin");

        LoginManager.getInstance().registerCallback(mCallbackManager, new FacebookCallback<LoginResult>() {
            @Override
            public void onSuccess(LoginResult loginResult) {
                Log.e(TAG, "login onSuccess loginResult = " + loginResult.toString());
                //获取授权信息
                requestAuthInfo();
            }

            @Override
            public void onCancel() {
                Log.e(TAG, "login onCancel");

                //通知js
                try {
                    Map<String,String> map = new HashMap<String, String>();
                    map.put("result", "23");

                    JSONObject jsonObject = new JSONObject(map);
                    String str = jsonObject.toString();

//                    new  AlertDialog.Builder(mActivity)
//                            .setTitle("提示" )
//                            .setMessage("login cancal" )
//                            .setPositiveButton("确定" ,  null )
//                            .show();
                    Log.d(TAG,"Cancel!!!!!");
                    jbw.dispatchEventToScript("loginFaceBookCall",str);
                } catch (Exception e) {
                    e.printStackTrace();
                    Map<String,String> map = new HashMap<String, String>();
                    map.put("result", "21");
                    map.put("info", e.getMessage());

                    JSONObject jsonObject = new JSONObject(map);
                    String str = jsonObject.toString();

//                    new  AlertDialog.Builder(mActivity)
//                            .setTitle("提示" )
//                            .setMessage("登录失败" )
//                            .setPositiveButton("确定" ,  null )
//                            .show();
                    Log.d(TAG,"error!!!!!");
                    jbw.dispatchEventToScript("loginFaceBookCall",str);
                }
            }

            @Override
            public void onError(FacebookException error) {
                Log.e(TAG, "login onError error = " + error.toString());
                //通知js
                try {
                    Map<String, String> map = new HashMap<String, String>();
                    map.put("result", "21");
                    map.put("info", error.toString());

                    JSONObject jsonObject = new JSONObject(map);
                    String str = jsonObject.toString();

//                    new AlertDialog.Builder(mActivity)
//                            .setTitle("提示")
//                            .setMessage("login err")
//                            .setPositiveButton("确定", null)
//                            .show();
                    Log.d(TAG, "error!!!!!");
                    jbw.dispatchEventToScript("loginFaceBookCall", str);
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
        });
    }

    /**
     *  登录
     */
    public void login() {
        Log.i(TAG, "login");

        if (isAuthorization()) {
            //已经授权
            requestAuthInfo();
            return;
        }

        Collection<String> permissions = Arrays.asList("public_profile", "email");
        LoginManager.getInstance().logInWithReadPermissions(mActivity, permissions);
    }

    /**
     *  是否授权
     */
    private boolean isAuthorization(){
        AccessToken accessToken = AccessToken.getCurrentAccessToken();
        if (accessToken == null) {
            return false;
        }

        return !accessToken.isExpired();
    }

    /**
     *  获取授权信息
     */
    private void requestAuthInfo() {
        Log.i(TAG, "requestAuthInfo");

        AccessToken accessToken = AccessToken.getCurrentAccessToken();
        GraphRequest graphRequest = GraphRequest.newMeRequest(accessToken, new GraphRequest.GraphJSONObjectCallback() {
            @Override
            public void onCompleted(JSONObject object, GraphResponse response) {
                Log.e(TAG, "requestAuthInfo onCompleted object = " + object.toString() + " response = " + response.toString());

                if (response.getError() != null) {
                    //授权错误
                    //通知js
                    try {
                        Map<String, String> map = new HashMap<String, String>();
                        map.put("result", "21");
                        map.put("info", response.getError().getErrorMessage());

                        JSONObject jsonObject = new JSONObject(map);
                        String str = jsonObject.toString();

//                        new AlertDialog.Builder(mActivity)
//                                .setTitle("提示")
//                                .setMessage("授权失败")
//                                .setPositiveButton("确定", null)
//                                .show();
                        Log.d(TAG, "error!!!!!");
                        jbw.dispatchEventToScript("loginFaceBookCall", str);
                    } catch (Exception e) {
                        e.printStackTrace();
                    }
                    return;
                }


                //id:1565455221565
                String id =  object.optString("id");
                //昵称：Zhang San
                String name = object.optString("name");
                //性别：比如 male （男）  female （女）
                String gender = object.optString("gender");
                //邮箱：比如：56236545@qq.com
                String email = object.optString("email");

                String token = object.optString("token");
                //头像
                String picture = "";
                JSONObject objPicture = object.optJSONObject("picture");
                if (objPicture != null) {
                    JSONObject objPictureData = objPicture.optJSONObject("data");
                    if (objPictureData != null) {
                        picture = objPictureData.optString("url");
                    }
                }
                //头像
                String avatar = String.format("https://graph.facebook.com/%s/picture?type=large", id);
//                String authInfo = String.format("{\"id\":\"%s\",\"name\":\"%s\",\"gender\":\"%s\",\"email\":\"%s\",\"picture\":\"%s\",\"avatar\":\"%s\"}",
//                        id, name, gender, email, picture, avatar);

                //通知js
                try {
                    Map<String, String> map = new HashMap<String, String>();
                    map.put("result", "22");
                    map.put("info", "facebook info success");
                    map.put("id", id);
                    map.put("gender", gender);
                    map.put("Email", email);
                    map.put("picture", picture);
                    map.put("avatar", avatar);
                    map.put("userName", name);

                    JSONObject jsonObject = new JSONObject(map);
                    String str = jsonObject.toString();

//                    new AlertDialog.Builder(mActivity)
//                            .setTitle("提示")
//                            .setMessage("登录成功")
//                            .setPositiveButton("确定", null)
//                            .show();
                    jbw.dispatchEventToScript("loginFaceBookCall", str);
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
        });

        Bundle param = new Bundle();
        param.putString("fields", "id,name,gender,email,picture");
        graphRequest.setParameters(param);
        graphRequest.executeAsync();
    }

    /**
     *  登出
     */
    public void logout() {
        Log.i(TAG, "logout");
        LoginManager.getInstance().logOut();
    }

    /**
     *  初始化分享
     */
    private void initShare() {
        Log.i(TAG, "initShare");

        mShareDialog = new ShareDialog(mActivity);
        mShareDialog.registerCallback(mCallbackManager, new FacebookCallback<Sharer.Result>() {
            @Override
            public void onSuccess(Sharer.Result result) {
                Log.e(TAG, "share onSuccess result = " + result.toString());

                //通知js
                try {
                    Map<String, String> map = new HashMap<String, String>();
                    map.put("result", "22");
                    map.put("info", result.toString());

                    JSONObject jsonObject = new JSONObject(map);
                    String str = jsonObject.toString();

                    new AlertDialog.Builder(mActivity)
                            .setTitle("提示")
                            .setMessage("分享成功")
                            .setPositiveButton("确定", null)
                            .show();
                    jbw.dispatchEventToScript("onFacebookShareSuccess", str);
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }

            @Override
            public void onCancel() {
                Log.e(TAG, "share onCancel");
                //通知js
                final String eval = String.format("cc.onFacebookShareCancel()");
                try {
                    Map<String, String> map = new HashMap<String, String>();
                    map.put("result", "22");
                    map.put("info", "share onCancel");

                    JSONObject jsonObject = new JSONObject(map);
                    String str = jsonObject.toString();

                    new AlertDialog.Builder(mActivity)
                            .setTitle("提示")
                            .setMessage("分享取消")
                            .setPositiveButton("确定", null)
                            .show();
                    jbw.dispatchEventToScript("onFacebookShareCancel", str);
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }

            @Override
            public void onError(FacebookException error) {
                Log.e(TAG, "share onError error = " + error.toString());
                //通知js
                final String eval = String.format("cc.onFacebookShareError('%s')", error.toString());
                try {
                    Map<String, String> map = new HashMap<String, String>();
                    map.put("result", "22");
                    map.put("info", error.toString());

                    JSONObject jsonObject = new JSONObject(map);
                    String str = jsonObject.toString();

                    new AlertDialog.Builder(mActivity)
                            .setTitle("提示")
                            .setMessage("share error")
                            .setPositiveButton("确定", null)
                            .show();
                    jbw.dispatchEventToScript("onFacebookShareError", str);
                } catch (Exception e) {
                    e.printStackTrace();
                }

            }
        });
    }

    /**
     *  分享
     */
    public void share(String shareInfo) {
        Log.i(TAG, "share shareInfo = " + shareInfo);

        try {
            JSONObject json = new JSONObject(shareInfo);
            int shareType = json.getInt("shareType");
            String shareUrl = json.getString("shareUrl");
            String imgPath = json.getString("imgPath");

            if (shareType == 0) {
                //链接
                if (ShareDialog.canShow(ShareLinkContent.class)) {
                    ShareLinkContent content = new ShareLinkContent.Builder()
                            .setContentUrl(Uri.parse(shareUrl))
                            .build();
                    mShareDialog.show(content);
                }
            } else if (shareType == 1) {
                //图片
                if (ShareDialog.canShow(SharePhotoContent.class)) {
                    Bitmap img = BitmapFactory.decodeFile(imgPath);
                    SharePhoto photo = new SharePhoto.Builder()
                            .setBitmap(img)
                            .build();
                    SharePhotoContent content = new SharePhotoContent.Builder()
                            .addPhoto(photo)
                            .build();
                    mShareDialog.show(content);
                }
            }
        } catch (JSONException e) {
            e.printStackTrace();
        }
    }
}
