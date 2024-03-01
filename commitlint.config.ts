import type { UserConfig } from '@commitlint/types'
import { RuleConfigSeverity } from '@commitlint/types'

const Configuration: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [RuleConfigSeverity.Error, 'always', [
      'build', // 标识修改项目构建相关(如glup, webpack, rollup, vite配置等)
      'ci', // 标识修改项目集成流程相关(如Jenkins, GitLab CI等)
      'docs', // 标识文档更新
      'feat', // 标识新增功能
      'merge', // 标识分支合并 Merge branch ? of ?
      'fix', // 标识bug修复
      'perf', // 标识性能, 体验优化
      'refactor', // 标识代码重构(既没有新增功能，也没有修复 bug)
      'style', // 标识不影响程序逻辑的代码修改(修改空白字符，格式缩进，补全缺失的分号等，没有改变代码逻辑)
      'test', // 标识新增测试用例或是更新现有测试
      'revert', // 标识回滚之前的提交
      'update', // 标识更新已有模块或文件
      'chore', // 不属于以上类型的其他类型
    ]],
  },
}

export default Configuration
