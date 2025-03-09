import { useTranslations } from '../imports'

export const useTicketListViewModel = () => {
  const t = useTranslations()

  const bodyInfo = (data: any) => {
    return data?.map(
      ({
        id,
        subject,
        title,
        updated_at: updated,
        status_label: statusLabel,
        status_background_color: backgroundColor,
        status_text_color: color,
      }) => ({
        id,
        subject,
        title,
        updatedAt: updated.split(' ')[0],
        statusLabel: (
          <div
            className="rounded-md p-2 w-fit mx-auto"
            style={{
              backgroundColor,
              color,
            }}
          >
            {statusLabel}
          </div>
        ),
      }),
    )
  }

  const headInfo = [
    t('id'),
    t('part'),
    t('title'),
    t('lastUpdate'),
    t('status'),
  ]

  return { bodyInfo, headInfo }
}
