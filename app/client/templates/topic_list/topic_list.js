/*****************************************************************************/
/* TopicList: Event Handlers */
/*****************************************************************************/
Template.TopicList.events({
});

/*****************************************************************************/
/* TopicList: Helpers */
/*****************************************************************************/
Template.TopicList.helpers({
	topics: function(){
		return Topics.find();
	}
});

/*****************************************************************************/
/* TopicList: Lifecycle Hooks */
/*****************************************************************************/
Template.TopicList.onCreated(function () {
});

Template.TopicList.onRendered(function () {
});

Template.TopicList.onDestroyed(function () {
});