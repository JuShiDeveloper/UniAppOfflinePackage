package com.dcloud.uniplugin;

import android.app.Activity;
import android.content.Intent;

import io.dcloud.feature.uniapp.annotation.UniJSMethod;
import io.dcloud.feature.uniapp.common.UniModule;


public class OpenFileModule extends UniModule {

    @UniJSMethod (uiThread = true)
    public void openFile(String filePath){
        if(mUniSDKInstance != null && mUniSDKInstance.getContext() instanceof Activity) {
            Intent intent = new Intent(mUniSDKInstance.getContext(), OpenFileActivity.class);
            intent.putExtra(OpenFileActivity.EXTRA_FILE_PATH,filePath);
            intent.putExtra(OpenFileActivity.EXTRA_FILE_NAME,"");
            ((Activity)mUniSDKInstance.getContext()).startActivity(intent);
        }
    }

    @UniJSMethod (uiThread = true)
    public void openFile(String filePath,String fileName){
        if(mUniSDKInstance != null && mUniSDKInstance.getContext() instanceof Activity) {
            Intent intent = new Intent(mUniSDKInstance.getContext(), OpenFileActivity.class);
            intent.putExtra(OpenFileActivity.EXTRA_FILE_PATH,filePath);
            intent.putExtra(OpenFileActivity.EXTRA_FILE_NAME,fileName);
            ((Activity)mUniSDKInstance.getContext()).startActivity(intent);
        }
    }
}
