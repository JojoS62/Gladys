/** 
  * Gladys Project
  * http://gladysproject.com
  * Software under licence Creative Commons 3.0 France 
  * http://creativecommons.org/licenses/by-nc-sa/3.0/fr/
  * You may not use this software for commercial purposes.
  * @author :: Pierre-Gilles Leymarie
  */
  
/**
* Notification.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

  	content :{
      type:'string',
      required:true
    },

    title :{
    	type: 'string',
    	required:true
    },

    priority:{
    	type:'integer',
    	 min: -2,
    	 max: 2,
    	 required:true
    },

    isRead:{
        type:'boolean',
        defaultsTo:false
    },
    
    icon:{
        type:'string',
        required:true
    },
    
    iconColor:{
        type:'string',
        required:true
    },

    user:{
        model:'User',
        required:true
    },

    pushovernotification:{
        collection: 'PushoverNotification',
        via: 'notification'
    },

    pushbulletnotification:{
        collection: 'PushBulletNotification',
        via: 'notification'
    },

    chromenotification:{
        collection: 'ChromeNotification',
        via: 'notification'
    }

  }
};
