function MyPromise(exector) {
    var _this = this;
    _this._status = 'pending';
    _this._result = undefined;
    _this._callback = {};

    function resolve(value) {
        if (_this._status !== 'pending') return;

        _this._status = 'resolved';

        _this._result = value;

        setTimeout(() => {
            _this._callback.onResolved && _this._callback.onResolved(value);
        })
    }

    function reject(reason) {
        if (_this._status !== 'pending') return;
        _this._status = 'rejected';
        _this._result = reason;
        setTimeout(() => {
            _this._callback.onRejected && _this._callback.onRejected(reason);
        })
    }
    exector(resolve, reject);
}

MyPromise.prototype.then = function (onResolved, onRejected) {
    var _this = this;
    return new MyPromise((resolve, reject) => {
        _this._callback.onResolved = function (value) {
            try {
                var result = onResolved(value);
                if (result instanceof MyPromise) {
                    result.then(resolve, reject);
                } else {
                    resolve(result);
                }
            } catch (e) {
                reject(e);
            }

        }
        _this._callback.onRejected = function (reason) {
            try {
                var result = onRejected(reason);
                if (result instanceof MyPromise) {
                    result.then(resolve, reject);
                } else {
                    resolve(result);
                }
            } catch (e) {
                reject(e);
            }

        };
    })
}