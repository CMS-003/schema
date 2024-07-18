# Schema
> 不同项目和数据库的表的 schemas 放在一个项目中

- ✅ typescript 编译
- ✅ 支持不同数据库实例
- ✅ 路径别名处理(babel)
- ✅ 支持传入 statics 和 methods
- ❌ (统一用 _id,mongo必有字段)虚拟 id,toJSON 中处理 _id
- 

## TODO: 动态方案
- schema: 通过jsonschema创建(schema表)
- class Model 添加 schema成员(jsonschema)
- 表jsonschema -> 接口
- 根据表的schema字段 创建(多个) 列表页模板和表单页模板
- 模板有编辑模式和视图模式(后台react动态路由 /edit/:template_id /preview/:template_id)
- 动态api类接口: apiPath => response