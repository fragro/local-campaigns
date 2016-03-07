prepMaterial = function(){
    prepBackend();
    delete window.nvtag;
/*    Meteor.setTimeout(function(){
        $.material.init();
    }, 0);*/
    jQuery(window).scroll(function(){
        var fromTopPx = 200; // distance to trigger
        var scrolledFromtop = jQuery(window).scrollTop();
        if(scrolledFromtop > fromTopPx){
            jQuery('#up').addClass('scrolled');
        }else{
            jQuery('#up').removeClass('scrolled');
        }
    });
    $("html, body").animate({ scrollTop: 0 }, "slow");
}
function trackingMiddleware(path, next) {
    GAnalytics.pageview(path);
    next();
}
function scrollToTop(path, next){
    jQuery('html,body').animate({scrollTop:0},0);
    next();
}
/*FlowRouter.middleware(trackingMiddleware);
FlowRouter.middleware(scrollToTop);*/
FlowRouter.route('/', {
    subscriptions: function(params){
        this.register("landing_items", Meteor.subscribe("landing_items"));
        this.register("testimonials", Meteor.subscribe("testimonials"));
        this.register("partners", Meteor.subscribe("partners"));
        this.register("events", Meteor.subscribe("events"));
        this.register("issues", Meteor.subscribe("issues"));
        this.register("timeline", Meteor.subscribe("timeline"));
    },
    action: function(params) {
        BlazeLayout.render('main_layout', { top: "hero_header", main: "landing", footer: "footer" });
        mainMeta('Ron Marlett for HD84', '');
        Session.set('view', 'home');
        prepMaterial();
    }
});
FlowRouter.route('/donate', {
    action: function(params) {
        BlazeLayout.render('main_layout', { top: "normal_header", main: "donate_main", footer: "footer" });
        mainMeta("Contribute Today", '/donate');
        Session.set('view', 'donate');
        prepMaterial();
    }
});
FlowRouter.route('/issues', {
    subscriptions: function(params){
        this.register("issues", Meteor.subscribe("issues"));
    },
    action: function(params) {
        BlazeLayout.render('main_layout', { top: "normal_header", main: "issues_in_depth", footer: "footer" });
        mainMeta("On the Issues", '/issues');
        Session.set('view', 'issues');
        prepMaterial();
    }
});
FlowRouter.route('/volunteer', {
    subscriptions: function(params){
        this.register('volunteers', Meteor.subscribe("volunteers"));
    },
    action: function(params) {
        BlazeLayout.render('main_layout', { top: "normal_header", main: "volunteer_ngpform", footer: "footer" });
        mainMeta("Volunteer Today", '/volunteer');
        Session.set('view', 'volunteer');
        prepMaterial();
    }
});
FlowRouter.route('/biography', {
    action: function(params) {
        BlazeLayout.render('main_layout', { top: "normal_header", main: "bio_main", footer: "footer" });
        mainMeta("Meet Ron Marlett of HD84", '/biography');
        Session.set('view', 'bio');
        prepMaterial();
    }
});

FlowRouter.route('/contact', {
    action: function(params) {
        BlazeLayout.render('main_layout', { top: "normal_header", main: "contact_main", footer: "footer" });
        mainMeta("Contact Ron Marlett", '/contact');
        Session.set('view', 'contact');
        prepMaterial();
    }
});
/*
FlowRouter.route('/reset-password', {
    action: function(params) {
        BlazeLayout.render('main_layout', { top: "normal_header", main: "reset_password", footer: "footer" });
        mainMeta('Oklahomans For Health: Legalize Medical Marjuana', '');
        prepMaterial();
    }
});
FlowRouter.route('/shop', {
    subscriptions: function(params){
        this.register('supply', Meteor.subscribe("supply"));
        this.register('orders', Meteor.subscribe("orders"));
        this.register('items', Meteor.subscribe("items"));
    },
    action: function(params) {
        BlazeLayout.render('main_layout', { top: "normal_header", main: "shop_main"});
        Meta.set("og:title", "Support Oklahomans for Health");
        Meta.set("og:description", "Buy merchandise to support the cause and spread the meme. Shirts start at $20");
        Meta.set("og:image", "https://s3.amazonaws.com/okforhealth/new_shirts_img_block.jpg");
        Meta.set("og:url", "https://www.oklahomansforhealth.com/shop");
        prepMaterial();
    }
});
FlowRouter.route('/shop/:item_id', {
    subscriptions: function(params){
        this.register('supply', Meteor.subscribe("supply"));
        this.register('orders', Meteor.subscribe("orders"));
        this.register('items', Meteor.subscribe("items"));
    },
    action: function(params) {
        BlazeLayout.render('main_layout', { top: "normal_header", main: "shop_item"});
        Meta.set("og:title", "Support Oklahomans for Health");
        Meta.set("og:description", "Buy merchandise to support the cause and spread the meme. Shirts start at $20");
        Meta.set("og:image", "https://s3.amazonaws.com/okforhealth/shop.jpg");
        Meta.set("og:url", "https://www.oklahomansforhealth.com/shop");
        prepMaterial();
    }
});
FlowRouter.route('/organizer', {
    subscriptions: function(params){
        this.register('supply', Meteor.subscribe("supply"));
        this.register('orders', Meteor.subscribe("orders"));
        this.register('items', Meteor.subscribe("items"));
    },
    action: function(params) {
        BlazeLayout.render('main_layout', { top: "normal_header", main: "admin", footer: "footer_empty" });
        mainMeta('Organizer Portal', '/organizer');
        prepMaterial();
    }

});
FlowRouter.route('/organizer/volunteer-management', {
    subscriptions: function(params, queryParams){
        page = parseInt(queryParams.page)
        if(!page){
            page = 0;
        }
        limit = PAGE_LIMIT
        offset = page*limit
        var options = {search: queryParams.search, filter:queryParams.f, sort:queryParams.s}
        console.log(options);
        this.register('my_volunteers', Meteor.subscribe('my_volunteers', offset, limit, options))
        this.register('users', Meteor.subscribe("users"));
        this.register('my_volunteer_acct', Meteor.subscribe("my_volunteer_acct"));
    },
    action: function(params) {
        BlazeLayout.render('main_layout', { top: "normal_header", main: "volunteer_main", footer: "footer_empty" });
        mainMeta('Organizer Portal', '/organizer');
        prepMaterial();
    }
});
FlowRouter.route('/cart', {
    subscriptions: function(params){
        this.register('orders', Meteor.subscribe("orders"));
        this.register('supply', Meteor.subscribe("supply"));
        this.register('items', Meteor.subscribe("items"));
    },
    action: function(params) {
        BlazeLayout.render('main_layout', { top: "normal_header", main: "cart", footer: "footer" });
        mainMeta('Cart', '/cart');
        prepMaterial();
    }
});

FlowRouter.route('/volunteer', {
    subscriptions: function(params){
        this.register('volunteers', Meteor.subscribe("volunteers"));
    },
    action: function(params) {
        BlazeLayout.render('main_layout', { top: "normal_header", main: "volunteer", footer: "footer" });
        Meta.set("og:title", "Volunteer for Oklahomans For Health");
        Meta.set("og:description", "Sign up to be a part of a small group of people helping to change the world for the better.");
        Meta.set("og:image", "https://s3.amazonaws.com/okforhealth/events-ok4health.png");
        Meta.set("og:url", "https://www.oklahomansforhealth.com/volunteer");
        prepMaterial();
    }
});

FlowRouter.route('/volunteer/:organizer_id', {
    subscriptions: function(params){
        this.register('volunteers', Meteor.subscribe("volunteers"));
    },
    action: function(params) {
        BlazeLayout.render('main_layout', { top: "normal_header", main: "volunteer", footer: "footer" });
        Meta.set("og:title", "Volunteer for Oklahomans For Health");
        Meta.set("og:description", "Sign up to be a part of a small group of people helping to change the world for the better.");
        Meta.set("og:image", "https://s3.amazonaws.com/okforhealth/events-ok4health.png");
        Meta.set("og:url", "https://www.oklahomansforhealth.com/volunteer");
        prepMaterial();
    }
});


FlowRouter.route('/volunteer-success', {
    subscriptions: function(params){
    },
    action: function(params) {
        BlazeLayout.render('main_layout', { top: "normal_header", main: "volunteer_success", footer: "footer" });
        Meta.set("og:title", "Volunteer for Oklahomans For Health");
        Meta.set("og:description", "Sign up to be a part of a small group of people helping to change the world for the better.");
        Meta.set("og:image", "https://s3.amazonaws.com/okforhealth/events-ok4health.png");
        Meta.set("og:url", "https://www.oklahomansforhealth.com/volunteer");
        prepMaterial();
    }
});

FlowRouter.route('/training', {
    subscriptions: function(params){
    },
    action: function(params) {
        BlazeLayout.render('main_layout', { top: "normal_header", main: "training_main", footer: "footer_empty"  });
        Meta.set("og:title", "Oklahomans For Health Training");
        Meta.set("og:description", "Learn how to gather signatures, run petition sites, and more.");
        Meta.set("og:image", "https://s3.amazonaws.com/okforhealth/training-ok4health.png");
        Meta.set("og:url", "https://www.oklahomansforhealth.com/training");
        prepMaterial();
    }
});

FlowRouter.route('/map', {
    subscriptions: function(params){
        this.register('sites', Meteor.subscribe("sites"));
    },
    action: function(params) {
        BlazeLayout.render('main_layout', { top: "normal_header", main: "map_main", footer: "footer_empty"  });
        Meta.set("og:title", "Oklahomans For Health Petition Locator");
        Meta.set("og:description", "Learn how to gather signatures, run petition sites, and more.");
        Meta.set("og:image", "https://s3.amazonaws.com/okforhealth/training-ok4health.png");
        Meta.set("og:url", "https://www.oklahomansforhealth.com/training");
        prepMaterial();
    }
});

FlowRouter.route('/organizer/petition-locator', {
    subscriptions: function(params){
        this.register('sites', Meteor.subscribe("sites"));
    },
    action: function(params) {
        BlazeLayout.render('main_layout', { top: "normal_header", main: "my_sites", footer: "footer_empty"  });
        Meta.set("og:title", "Oklahomans For Health Petition Locator");
        prepMaterial();
    }
});

FlowRouter.route('/organizer/new-petition-site', {
    subscriptions: function(params){
        this.register('sites', Meteor.subscribe("sites"));
    },
    action: function(params) {
        BlazeLayout.render('main_layout', { top: "normal_header", main: "new_site", footer: "footer_empty"  });
        Meta.set("og:title", "Oklahomans For Health Petition Locator");
        prepMaterial();
    }
});

FlowRouter.route('/organizer/petition-locator', {
    subscriptions: function(params){
        this.register('sites', Meteor.subscribe("sites"));
    },
    action: function(params) {
        BlazeLayout.render('main_layout', { top: "normal_header", main: "my_sites", footer: "footer_empty"  });
        Meta.set("og:title", "Oklahomans For Health Petition Locator");
        prepMaterial();
    }
});


FlowRouter.route('/events', {
    subscriptions: function(params){
        this.register('events', Meteor.subscribe("events"));
    },
    action: function(params) {
        BlazeLayout.render('main_layout', { top: "normal_header", main: "event_list", footer: "footer" });
        Meta.set("og:title", "Oklahomans For Health Event List");
        Meta.set("og:description", "Get ready for the petition in 2015! Join us for training, outreach, GOTV, and more!");
        Meta.set("og:image", "https://s3.amazonaws.com/okforhealth/events-ok4health.png");
        Meta.set("og:url", "https://www.oklahomansforhealth.com/events");
        prepMaterial();
    }
});*/




