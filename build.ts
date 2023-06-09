import ts from 'typescript'
import tsconfig from './tsconfig.json'

const entryPoint = 'src/index.ts'

build(entryPoint)

function build(entryPoint: string): void {
  const { options } = ts.convertCompilerOptionsFromJson(tsconfig.compilerOptions, '.')

  const program = ts.createProgram([entryPoint], options)
  const sourceFile = program.getSourceFile(entryPoint)

  if (!sourceFile) {
    throw new Error('Source file not found')
  }

  program.emit()
}
