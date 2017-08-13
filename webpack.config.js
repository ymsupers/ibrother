/**
 * Created by mr.yang on 2017/8/13.
 */

module.exports = function () {
    return require(`./dist/webpack.${process.env.NODE_ENV}.js`);
};
