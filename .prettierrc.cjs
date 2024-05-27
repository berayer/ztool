/** @type {import("prettier").Config} */
const config = {
  /** 语句尾随逗号 */
  trailingComma: 'none',
  /** 缩进空格数 */
  tabWidth: 2,
  /** 在末尾打印分号 */
  semi: false,
  /** 使用单引号 */
  singleQuote: true,
  /** 将换行的行长度 */
  printWidth: 100,
  /** 换行方式 */
  endOfLine: 'auto',
}

module.exports = config
