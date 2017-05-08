//
//  GetDistanceModule.m
//  RCTBaiduMap
//
//  Created by xizhixin on 2017/5/5.
//  Copyright © 2017年 lovebing.org. All rights reserved.
//

#import "GetDistanceModule.h"
#import <UIKit/UIKit.h>
#import <BaiduMapAPI_Utils/BMKGeometry.h>
#import "RCTEventDispatcher.h"

@implementation GetDistanceModule

@synthesize bridge = _bridge;

RCT_EXPORT_MODULE(BaiduGetDistanceModule);

RCT_EXPORT_METHOD(getDistance:(double)lat1 lng1:(double)lng1 lat2:(double)lat2 lng2:(double)lng2 ){
    
    BMKMapPoint point1 = BMKMapPointForCoordinate(CLLocationCoordinate2DMake(lat1,lng1));
    BMKMapPoint point2 = BMKMapPointForCoordinate(CLLocationCoordinate2DMake(lat2,lng2));
    CLLocationDistance distance = BMKMetersBetweenMapPoints(point1,point2);
    
    [self.bridge.eventDispatcher sendAppEventWithName:@"getDistanceResult" body:@{@"distance":[NSString stringWithFormat:@"%f",distance]}];
    
}


@end
