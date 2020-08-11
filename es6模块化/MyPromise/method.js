function MyPromise(exector) {
    // debugger;
    var _this = this;
    _this._status = 'pending';
    _this._result = undefined;
    _this._callback = {};

    function resolve(value) {
        if (_this._status !== 'pending') return;
        _this._status = 'resolved';
        _this._result = value;
        setTimeout(function () {
            // _this._callback.onResolved?.(value);
            _this._callback.onResolved && _this._callback.onResolved(value);
        })
    }

    function reject(reason) {
        if (_this._status !== 'pending') return;
        _this._status = 'rejected';
        _this._result = reason;
        setTimeout(function () {
            // _this._callback.OnRejected?.(reason);
            _this._callback.onRejected && _this._callback.onRejected(reason);
        })
    }
    exector(resolve, reject);
}

MyPromise.prototype.then = function (onResolved, onRejected) {
    var _this = this;

    onResolved =
        typeof onResolved !== 'function'
            ? function (value) {
                return value;
            } : onResolved;


    onRejected =
        typeof onRejected !== 'function'
            ? function (reason) {
                throw (reason);
            } : onRejected;

    return new MyPromise(function (resolve, reject) {
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
            };
        };

    });

};

MyPromise.prototype.catch = function (onRejected) {
    return this.then(undefined, onRejected);
};

MyPromise.all = function (promise) {
    return new MyPromise(function (resolve, reject) {
        const allPromiseCount = promise.length;
        let resolvedPromiseCount = 0;
        const resultArr = [];

        promise.forEach((promise, index) => {
            promise.then(
                function (value) {
                    resolvedPromiseCount++;
                    resultArr[index] = value;
                    // if(resolvedPromiseCount===allPromiseCount)
                }
            )
        })
    })
}