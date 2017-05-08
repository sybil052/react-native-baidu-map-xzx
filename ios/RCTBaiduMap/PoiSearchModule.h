#ifndef PoiSearchModule_h
#define PoiSearchModule_h

#import "BaseModule.h"
#import "RCTBaiduMapViewManager.h"
#import <BaiduMapAPI_Map/BMKMapComponent.h>
#import <BaiduMapAPI_Search/BMKSearchComponent.h>
#import <BaiduMapAPI_Search/BMKPoiSearch.h>

@interface PoiSearchModule : BaseModule <BMKPoiSearchDelegate> {
  int searchType;
}

@end

#endif /* PoiSearchModule_h */