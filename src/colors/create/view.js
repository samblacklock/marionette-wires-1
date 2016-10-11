import Orchestra from 'orchestra';
import nprogress from 'nprogress';
import FormBehavior from '../../forms/behavior';
import template from './template.hbs';
import storage from '../storage';

export default Orchestra.ItemView.extend({
  template: template,
  className: 'colors colors--create container',

  behaviors: {
    form: { behaviorClass: FormBehavior }
  },

  templateHelpers() {
    return {
      errors: this.errors
    };
  },

  events: {
    'submit form': 'handleSubmit'
  },

  handleSubmit() {
    let errors = this.model.validate(this.form);

    if (errors) {
      this.errors = errors;
      this.render();
    } else {
      nprogress.start();
      this.model.set(this.form);
      storage.save(this.model).then(() => {
        Orchestra.history.navigate('colors', { trigger: true });
      });
    }
  }
});
