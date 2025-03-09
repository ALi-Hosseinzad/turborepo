import { useTranslations } from 'next-intl'

export const UsePropertyListValue = (type, list) => {
  const t = useTranslations()
  switch (type) {
    case 'range':
      return [
        {
          name: 'rows',
          title: t('rows'),
          value: list.rows,
          sizeInput: 'Small',
          placeholder: '2',
        },
        {
          name: 'maxRows',
          title: t('maxRows'),
          value: list.maxRows,
          sizeInput: 'Small',
          placeholder: '5',
        },
      ]

    case 'textarea':
      return [
        {
          name: 'maxValue',
          title: t('maxValue'),
          value: list.maxRows,
          sizeInput: 'Small',
          placeholder: '15',
        },
        {
          name: 'minValue',
          title: t('minValue'),
          value: list.maxRows,
          sizeInput: 'Small',
          placeholder: '5',
        },

        {
          name: 'step',
          title: t('step'),
          value: list.rows,
          sizeInput: 'Small',
          placeholder: '3',
        },
      ]
  }
}
