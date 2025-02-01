export default {
    STATUS: {
        // 丢弃
        DISCARD: 0,
        // 初建
        INITIAL: 1,
        // 下载/连载
        LOADING: 2,
        // 失败
        FAILURE: 3,
        // 成功
        SUCCESS: 4,
        // 转码
        TRANSCODING: 5,
    },
    TYPE: {
        RESOURCE: {
            // 文章
            ARTICLE: 1,
            // 视频
            VIDEO: 2,
            // 图片
            IMAGE: 3,
            // 漫画
            COMIC: 4,
            // 电影
            MOVIE: 5,
            // 小说(章节类型)
            NOVEL: 6,
            // 音乐
            MUSIC: 7,
            // 私人
            PRIVATE: 8,
            // 动画
            ANIMATE: 9,
            // 画册
            ALBUM: 10,
            // 帖子
            POSTS: 11,
        },
        VIDEO: {
            // 正片
            FEATURE: 1,
            // 预告
            TRAILER: 2,
            // 花絮
            TIDBITS: 3,
            // 正文
            CONTENT: 4,
        },
        IMAGE: {
            // 封面
            COVER: 1,
            // 小图
            THUMB: 2,
            // 正文
            INNER: 3,
            // 画册
            ALBUM: 4,
        },
        CHAPTER: {
            // 章节
            CHAPTER: 1,
            // 分卷
            VOLUMES: 2,
        },
        SEGMENT: {
            POINT: 1,
            RANGE: 2,
        },
        MUSIC: {
            AUDIO: 1,
            MOVIE: 2,
        },
        FILE: {},
        CAPTION: {
            SUBTITLES: 1,
            LYRICS: 2,
        }
    },
};
