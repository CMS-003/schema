function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import _ from 'lodash';
class Base {
  constructor() {
    this.model = null;
  }
  _init(opts) {
    var opt = {
      where: {},
      sort: {},
      attrs: {},
      lean: false,
      data: null,
      options: {}
    };
    opt.where = opts.where || {};
    opt.options = opts.options || {};
    // README: 特殊处理
    for (var key in opt.where) {
      if (_.isPlainObject(opt.where[key])) {
        for (var k2 in opt.where[key]) {
          if (k2.startsWith('__')) {
            var k = k2.replace('__', '$');
            opt.where[key][k] = opt.where[key][k2];
            delete opt.where[key][k2];
          }
        }
      }
    }
    // 分页
    if (_.isInteger(opts.limit)) {
      opt.limit = opts.limit;
    } else {
      opt.limit = 20;
    }
    if (_.isInteger(opts.page)) {
      opt.offset = (opts.page - 1) * opt.limit;
    } else {
      opt.page = 1;
    }
    if (_.isInteger(opts.offset)) {
      opt.offset = opts.offset;
    } else {
      opt.offset = 0;
    }
    // 事物

    // 关联查询

    // 字段
    if (!_.isEmpty(opts.attrs)) {
      opt.attrs = opts.attrs;
    }

    // update的数据
    if (opts.data) {
      opt.data = opts.data;
    }
    // 排序
    if (opts.sort) {
      opt.sort = opts.sort;
    }
    // sum
    if (opts.sum) {
      opt.sum = opts.sum;
    }
    // lean
    if (opts.lean) {
      opt.lean = true;
    }
    return opt;
  }
  /**
   * aggregate聚合函数
   * @param {array} sql 数组
   */

  aggregate(query) {
    return this.model.aggregate(query);
  }
  getModel() {
    return this.model;
  }
  create(data) {
    if (!data._id) {
      data._id = data.id;
      delete data.id;
    }
    return this.model.create(data);
  }
  destroy(opts) {
    var opt = this._init(opts);
    if (_.isEmpty(opt.where)) {
      opt.where['_id'] = '';
    }
    return this.model.deleteMany(opt.where);
  }
  update() {
    var _arguments = arguments,
      _this = this;
    return _asyncToGenerator(function* () {
      var opts = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : {};
      var opt = _this._init(opts);
      if (opt.data) {
        yield _this.model.updateMany(opt.where, opt.data, opt.options);
      }
      return _this.getInfo(opts);
    })();
  }
  getAll() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var opt = this._init(opts);
    return this.model.find(opt.where).select(opt.attrs).sort(opt.sort).lean(opt.lean);
  }
  count() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var opt = this._init(opts);
    return this.model.countDocuments(opt.where);
  }
  sum() {
    var _arguments2 = arguments,
      _this2 = this;
    return _asyncToGenerator(function* () {
      var opts = _arguments2.length > 0 && _arguments2[0] !== undefined ? _arguments2[0] : {};
      var opt = _this2._init(opts);
      var sum = yield _this2.model.aggregate([{
        $match: opt.where
      }, {
        $group: {
          _id: null,
          count: {
            $sum: '$' + opt.sum
          }
        }
      }]);
      return sum.length ? sum[0].count : 0;
    })();
  }
  getList() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var opt = this._init(opts);
    return this.model.find(opt.where).select(opt.attrs).limit(opt.limit).skip(opt.offset).sort(opt.sort).lean(opt.lean);
  }
  getInfo() {
    var _arguments3 = arguments,
      _this3 = this;
    return _asyncToGenerator(function* () {
      var opts = _arguments3.length > 0 && _arguments3[0] !== undefined ? _arguments3[0] : {};
      var opt = _this3._init(opts);
      var result = yield _this3.model.findOne(opt.where).select(opt.attrs).skip(opt.offset).sort(opt.sort).lean(opt.lean);
      return result;
    })();
  }
  getAttributes() {
    var fields = this.model.schema.paths;
    var result = [];
    for (var field in fields) {
      console.log("\u5B57\u6BB5: ".concat(field, ", \u7C7B\u578B: ").concat(fields[field].instance));
      result.push({
        field,
        type: fields[field].instance
      });
    }
    return result;
  }
}
_defineProperty(Base, "models", {});
export default Base;