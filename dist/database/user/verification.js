import mongoose from "mongoose";
import Base from '#base';
// 1 registry 2 login 3 update pass 4 forgot pass 5 logoff 6 bind
var Type;
(function (Type) {
    Type[Type["register"] = 1] = "register";
    Type[Type["login"] = 2] = "login";
    Type[Type["update_pass"] = 3] = "update_pass";
    Type[Type["forgot_pass"] = 4] = "forgot_pass";
    Type[Type["logoff"] = 5] = "logoff";
    Type[Type["bind"] = 6] = "bind";
})(Type || (Type = {}));
class Verification extends Base {
    constructor(db, params = {}) {
        super();
        const schema = new mongoose.Schema({
            _id: { type: String },
            method: { type: String },
            type: { type: Number, enum: Type },
            code: { type: String },
            content: { type: String },
            user_id: { type: String },
            receiver: { type: String },
            createdAt: { type: Date },
            expiredAt: { type: Date },
            status: { type: Number },
        }, {
            strict: false,
            versionKey: false,
            excludeIndexes: true,
            collection: 'verification',
            methods: params.methods || {},
            statics: params.statics || {},
        });
        this.model = db.model('verification', schema);
        Base.models.Verification = this.model;
    }
}
export default Verification;
