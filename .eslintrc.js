module.exports = {
  root:          true,
  parserOptions: {
    parser: 'babel-eslint',
    "ecmaFeatures": {
      "legacyDecorators": true
    }
  },
  env:           {
    browser: true,
    node:    true,
    mocha:   true
  },
  "globals":     {
    "expect": true
  },
  extends:       [
    "plugin:vue/essential"
    // 'plugin:vue/recommended',
    // 'standard'
  ],
  plugins:       [
    'vue'
  ],
  rules:         {
    'generator-star-spacing':          'off',
    // Отступы: таб
    "indent":                          [
      "error",
      "tab", {
        "SwitchCase": 1
      }
    ],
    // Стиль переноса строки: unix
    /*"linebreak-style":                 [
		"error",
		"unix"
	],*/
    // Кавычки для строк: одинарные, иcключение - строки, содержащие одинарные кавычки,
    // чтобы не экранировать. Например: << let a = "a string containing 'single' quotes"; >>.
    "quotes":                          [
      "error",
      "single",
      {
        "avoidEscape": true
      }
    ],
    // Не используем else, если внутри if заканчивается return'ом
    "no-else-return":                  [
      "error",
      {
        "allowElseIf": false
      }
    ],
    // Открывающаяся и закрывающаяся скобки определения массива должны быть
    // - на одной строке, если элементы перечислены в одну строку
    // - на на отдельных строках, если элементы перечислены в несколько строк
    "array-bracket-newline":           [
      "error",
      "consistent"
    ],
    // Не используем пробелы перед/после закрывающей/открывающей скобкой определения массива
    "array-bracket-spacing":           [
      "error",
      "never"
    ],
    // Элементы массива должны быть перечислены
    // - либо все в одну строку
    // - либо каждый на отдельной строке
    "array-element-newline":           [
      "error",
      "consistent"
    ],
    // else, catch finally блоки должны начинаться с новой строки
    "brace-style":                     [
      "error",
      "stroustrup"
    ],
    // Переменные в camelCase
    "camelcase":                       [
      "error",
      {
        "properties":          "always",
        "ignoreDestructuring": true
      }
    ],
    // Обязательная запятая в конце каждой строки при многострочном перечеслении свойств объекта, элементов массива
    "comma-dangle":                    [
      "error",
      "always-multiline"
    ],
    // Обязательные пробел после запятой (если запятая не последний символ в строке)
    "comma-spacing":                   [
      "error",
      {
        "before": false,
        "after":  true
      }
    ],
    // Обязательная пустая строка в конце файла
    "eol-last":                        [
      "error",
      "always"
    ],
    // Отсутствие пробела между названием функции и отрывающейся скобки списка ее параметров
    "func-call-spacing":               [
      "error",
      "never"
    ],
    // Параметры функции должны быть перечислены
    // - либо все в одну строку
    // - либо каждый на отдельной строке
    "function-paren-newline":          [
      "error",
      "consistent"
    ],
    // Выравнивание значений атрибутов объекта
    "key-spacing":                     [
      "error",
      {
        "align": "value"
      }
    ],
    // Пробел перед/после ключевыми словами (if, else, for, as, from и др.)
    "keyword-spacing":                 [
      "error",
      {
        "before": true,
        "after":  true
      }
    ],
    // Пустая строка между членами класса (свойствами, атрибутами)
    "lines-between-class-members":     [
      "error",
      "always"
    ],
    // todo-22.10.2021-smirnov.in
    // Конструкторы должны называться с заглавной буквы
    // "new-cap":                         [
    // 	"error",
    // 	{
    // 		"newIsCap":   true,
    // 		"capIsNew":   true,
    // 		"properties": true
    // 	}
    // ],
    // Если блок else содержит только один if, то конструкцию необходимо заменить на else if
    "no-lonely-if":                    [
      "error"
    ],
    // Не должно быть подряд идущих пустых линий
    "no-multiple-empty-lines":         [
      "error"
    ],
    // Не используем вложенные тернарные операторы
    "no-nested-ternary":               [
      "error"
    ],
    // Не должно быть пробелов в конце строки
    "no-trailing-spaces":              [
      "error"
    ],
    // Не должно быть пробелов перед обращением к свойству объекта (foo .bar)
    "no-whitespace-before-property":   [
      "error"
    ],
    // При переносе конструкции опрератор дожен переноситься на новую строку
    // Примеры:
    // if (someCondition
    //    || otherCondition) {
    // }
    // answer = everything
    //  ? 42
    //  : foo;
    "operator-linebreak":              [
      "error",
      "before"
    ],
    // Не отделяем тело блока пустыми строками
    "padded-blocks":                   [
      "error",
      "never"
    ],
    // Пустая строка перед return
    "padding-line-between-statements": [
      "error",
      {
        "blankLine": "always",
        "prev":      "*",
        "next":      "return"
      }
    ],
    // Обязательные js'доки
    // "require-jsdoc":                   [
    // 	"error",
    // 	{
    // 		"require": {
    // 			"FunctionDeclaration":     true,
    // 			"MethodDefinition":        true,
    // 			"ClassDeclaration":        true,
    // 			"ArrowFunctionExpression": true,
    // 			"FunctionExpression":      true
    // 		}
    // 	}
    // ],
    // Обязательная точка запятой в конце выражений
    "semi":                            [
      "error",
      "always"
    ],
    // Обязательный пробел после точки с запятой
    "semi-spacing":                    [
      "error",
      {
        "before": false,
        "after":  true
      }
    ],
    // Не пишем пробел перед перечислением параметров функции
    "space-before-function-paren":     [
      "error",
      {
        "anonymous":  "never",
        "named":      "never",
        "asyncArrow": "always"
      }
    ],
    // Не пишем пробел перед/после перечислением параметров функции
    "space-in-parens":                 [
      "error",
      "never"
    ],
    // Обрамляем операторы пробелами
    "space-infix-ops":                 [
      "error"
    ],
    // Обрамляем регулярные выражения скобками
    "wrap-regex":                      [
      "error"
    ],
    // Не должно быть пустых конструкторов
    "no-useless-constructor":          [
      "error"
    ],
    // Используем let/const вместо var
    "no-var":                          [
      "error"
    ],
    // Если переменная не изменяется, то используем const вместо let
    "prefer-const":                    [
      "error"
    ],
    // Не должно быть использования не определенных переменных
    // Если переменная глобальная, то в начале файла необходимо это указать: /* global jQuery */
    "no-undef":                        [
      "error"
    ],

    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
};
