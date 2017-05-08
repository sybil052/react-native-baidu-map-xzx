package org.lovebing.reactnative.baidumap;

import android.util.Log;
import android.widget.Toast;

import com.baidu.mapapi.model.LatLng;
import com.baidu.mapapi.utils.DistanceUtil;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;

/**
 * Created by xizhixin on 2017/5/5.
 */


public class GetDistanceModule extends BaseModule{

    public GetDistanceModule(ReactApplicationContext reactContext) {
        super(reactContext);
        context = reactContext;
    }

    public String getName() {
        return "BaiduGetDistanceModule";
    }

    @ReactMethod
    public void getDistance(double lat1, double lng1, double lat2, double lng2) {
        WritableMap params = Arguments.createMap();
        LatLng p1 = new LatLng(lat1, lng1);
        LatLng p2 = new LatLng(lat2, lng2);
        //计算p1、p2两点之间的直线距离，单位：米
        double distance = DistanceUtil.getDistance(p1, p2);

        //Toast.makeText(getReactApplicationContext(), "distance="+distance, 1).show();

        params.putDouble("distance",  distance);
        sendEvent("getDistanceResult", params);
    }

}
