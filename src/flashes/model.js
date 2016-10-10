import Orchestra from 'orchestra';

export default Orchestra.Model.extend({
  defaults: {
    timeout: false,
    dismissible: true,
    clearOnRoute: true
  },

  initialize() {
    if (this.get('timeout') !== false) {
      this._setTimeout();
    }

    this.on('destroy', this._clearTimeout);

    if (this.get('clearOnRoute')) {
      this.listenTo(Orchestra.history, 'route', this.destroy);
    }
  },

  _setTimeout() {
    this._timeout = setTimeout(() => this.destroy(), this.get('timeout'));
  },

  _clearTimeout() {
    if (this._timeout) {
      clearTimeout(this._timeout);
      delete this._timeout;
    }
  }
});
