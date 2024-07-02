(function(window) {

    window.googletag = window.googletag || { cmd: [] };

    googletag.cmd = googletag.cmd || [];

    let rewardedSlot;

    // styles_pre

    let colour = "background: linear-gradient(170.1deg, #9D85FF 0%, #CF8BF3 100%)!important;";

    let clean = "background: rgba(245, 245, 245, 1)!important;";

    let black = "background: linear-gradient(180deg, #0F0F0F 0%, rgba(15, 15, 15, 0) 100%)!important;";

    let target = "";

    

    googletag.cmd.push(() => {

        if (target.length === 0) {

            rewardedSlot = googletag.defineOutOfPageSlot(

                "/22697551224/Ads_full",

                googletag.enums.OutOfPageFormat.REWARDED,

            );

            

        } else {

            rewardedSlot = googletag.defineOutOfPageSlot(

                "/22697551224/Ads_full",

                googletag.enums.OutOfPageFormat.REWARDED,

            ).setTargeting('target', ['']);

        }

        

        if ('onTimer' == 'onExit') {

            window.history.pushState({}, null, null);

        }

        

        // Slot returns null if the page or device does not support rewarded ads.

        if (rewardedSlot) {

            

            window.dismissRewardedAd170983604565ea070d5136f = function() {

                googletag.destroySlots([rewardedSlot]);

            }

            rewardedSlot.addService(googletag.pubads());

            googletag.pubads().addEventListener("rewardedSlotReady", (event) => {

                if ('onTimer' === 'onExit') {

                    window.addEventListener('popstate', () => {

                        event.makeRewardedVisible();

                        console.log('User clicked back button');

                        applyStyles();

                    });

                }

                else if ('onTimer' === 'onCall'){

                    window.showVDVTRewardedAd = function() {

                        event.makeRewardedVisible();

                        console.log('User clicked back button');

                        applyStyles();

                    }

                }

                else {

                    var delay = (''||1) * 1000;

                    setTimeout(() => {

                        event.makeRewardedVisible();

                        applyStyles();

                    }, delay);

                    

                    

                }

            });

            googletag.pubads().addEventListener("rewardedSlotClosed", dismissRewardedAd170983604565ea070d5136f);

            googletag.pubads().addEventListener("rewardedSlotGranted", (event) => {

                // Automatically close the ad by destroying the slot.

                // Remove this to force the user to close the ad themselves.

                // dismissRewardedAd();

                if ('disabled' !== 'disabled') {

                    if (rewardedSlot) {

                        googletag.destroySlots([rewardedSlot]);

                    }

                }

                const reward = event.payload;

                // Tracking link removed as per instructions

            });

            googletag.enableServices();

            googletag.display(rewardedSlot);

            if (googletag.pubads().isInitialLoadDisabled()) {

                googletag.pubads().refresh([rewardedSlot]);

            }

            //rollback

googletag.pubads().addEventListener("slotRenderEnded", (event) => {

const slot = event.slot;

if (slot === rewardedSlot) {

var containsAds = !event.isEmpty; 

console.log(containsAds);

if (containsAds === true) {

var slotId = slot.getSlotElementId();

document.getElementById(slotId).style.cssText += (black+'');

// Code related to keyValue parsing and external fallback removed as per instructions

}

console.group("Slot", slot.getSlotElementId(), "finished rendering.");

// Log details of the rendered ad.

console.log("Advertiser ID:", event.advertiserId);

console.log("Campaign ID:", event
