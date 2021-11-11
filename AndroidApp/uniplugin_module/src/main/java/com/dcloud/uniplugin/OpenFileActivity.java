package com.dcloud.uniplugin;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.os.Bundle;
import android.text.TextUtils;
import android.view.View;
import android.widget.FrameLayout;
import android.widget.TextView;

import com.tencent.smtt.sdk.QbSdk;
import com.tencent.smtt.sdk.TbsListener;
import com.tencent.smtt.sdk.TbsReaderView;


public class OpenFileActivity extends Activity implements TbsListener, QbSdk.PreInitCallback, TbsReaderView.ReaderCallback, View.OnClickListener {
    private final String TAG = "OfficeFrame";

    private TbsReaderView tbsReaderView;
    private String mOfficeUrl = "";
    private String tbsReaderTemp;
    private FrameLayout mFrame;
    private TextView textView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        mOfficeUrl = getIntent().getStringExtra("filePath");
        tbsReaderTemp = this.getExternalCacheDir() + "/TbsReaderTemp";
        setContentView(R.layout.activity_open_file_layout);
        mFrame = findViewById(R.id.FrameLayout);
        textView = findViewById(R.id.TextView);
        findViewById(R.id.back).setOnClickListener(this);
        initQbSdk();
    }

    private void initQbSdk() {
        log("OfficeFrame initQbSdk start");
        QbSdk.setTbsListener(this);
        QbSdk.initX5Environment(this, this);
        loadOffice(mOfficeUrl);
    }

    public void loadOffice(String officePath) {
        this.mOfficeUrl = officePath;
        log("loadOffice method officePath = " + this.mOfficeUrl);
        Bundle localBundle = new Bundle();
        localBundle.putString("filePath", this.mOfficeUrl);
        localBundle.putString("tempPath", this.tbsReaderTemp);
        resetTbsView();
        boolean result = this.tbsReaderView.preOpen(getFileType(this.mOfficeUrl), false);
        if (result) {
            this.tbsReaderView.openFile(localBundle);
        }
    }

    private void resetTbsView() {
        if (null != this.tbsReaderView) {
            this.tbsReaderView.onStop();
            this.mFrame.removeView(this.tbsReaderView);
            this.tbsReaderView = null;
        }
        this.tbsReaderView = new TbsReaderView(this, this);
        this.mFrame.addView(this.tbsReaderView);
    }

    private String getFileType(String filePath) {
        String str = "";
        if (TextUtils.isEmpty(filePath)) {
            log("filePath --> null");
        } else {
            log("filePath --> " + filePath);
            int i = filePath.lastIndexOf(".");
            if (i <= -1) {
                log("i <= -1");
            } else {
                str = filePath.substring(i + 1);
                log("filePath.substring(i + 1) --> " + str);
            }
        }
        return str;
    }

    private void log(String msg) {
//        Log.v(TAG,msg);
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        if (tbsReaderView != null) {
            this.tbsReaderView.onStop();
            this.mFrame.removeView(this.tbsReaderView);
            this.tbsReaderView = null;
        }
        QbSdk.clear(this);
    }

    @Override
    public void onDownloadFinish(int i) {
        log("OfficeFrame onDownloadFinish " + i);

    }

    @Override
    public void onInstallFinish(int i) {
        log("OfficeFrame onInstallFinish " + i);
    }

    @SuppressLint("SetTextI18n")
    @Override
    public void onDownloadProgress(final int i) {
        log("OfficeFrame onDownloadProgress " + i);
        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                textView.setText("插件加载中 " + i + "%");
            }
        });
    }

    @Override
    public void onCoreInitFinished() {
        log("OfficeFrame onCoreInitFinished ");
    }

    @Override
    public void onViewInitFinished(boolean isSuccess) {
        log("OfficeFrame onViewInitFinished isSuccess = " + isSuccess);
        loadOffice(mOfficeUrl);
    }

    @Override
    public void onCallBackAction(Integer integer, Object o, Object o1) {

    }

    @Override
    public void onPointerCaptureChanged(boolean hasCapture) {

    }

    @Override
    public void onClick(View v) {
        if (v.getId() == R.id.back) {
            finish();
        }
    }
}
