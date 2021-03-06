angular.module('formBuilder.formInput').directive('formInput', function() {
	return {
		restrict: 'E',
		replace: true,
		require: '^form',
		scope: true,
		transclude: true,
		templateUrl: 'form-input/directive/formInput/formInput.html',
		link: function(scope, element, attrs, formCtrl, transclude) {
			transclude(function (clone) {
				scope = _.extend(scope, {
					form: formCtrl,
					icon: { class: attrs.icon },
					name: clone[1].name
				});
				clone.addClass('form-control');
				element.find('transclude').replaceWith(clone);
			});
		}
	};
});
