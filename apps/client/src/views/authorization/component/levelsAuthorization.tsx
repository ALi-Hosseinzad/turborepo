import {
  BaseLevelDisableProps,
  ConfirmCard,
  FifthLevelDisableLegalProps,
  FifthLevelEnableLegalProps,
  FifthLevelPendingLegalProps,
  FirstLevelDisableLegalProps,
  FirstLevelDisableProps,
  FirstLevelEnableLegalProps,
  FirstLevelEnableProps,
  FirstLevelPendingLegalProps,
  FirstLevelPendingProps,
  FourthLevelDisableLegalProps,
  FourthLevelDisableProps,
  FourthLevelEnableLegalProps,
  FourthLevelEnableProps,
  FourthLevelPendingLegalProps,
  FourthLevelPendingProps,
  SecondLevelDisableLegalProps,
  SecondLevelDisableProps,
  SecondLevelEnableLegalProps,
  SecondLevelEnableProps,
  SecondLevelPendingLegalProps,
  SecondLevelPendingProps,
  SixthLevelDisableLegalProps,
  SixthLevelEnableLegalProps,
  SixthLevelPendingLegalProps,
  ThirdLevelDisableLegalProps,
  ThirdLevelDisableProps,
  ThirdLevelEnableLegalProps,
  ThirdLevelEnableProps,
  ThirdLevelPendingLegalProps,
  ThirdLevelPendingProps,
} from '../imports'

export const LevelsAuthorization = ({ user }: any) => {
  const {
    verify_state: verifyState,
    //  is_guild,
    is_legal: isLegal,
  } = user
  const BaseLevel = true

  return (
    <div className="overflow-hidden cursor-grab	">
      {!isLegal && (
        <div className=" overflow-x-scroll">
          <div className="flex flex-row gap-4 ">
            {BaseLevel && verifyState?.media_authorization ? null : (
              <div className="basis-1/3  md:basis-1/2 lg:basis-1/3">
                <ConfirmCard {...BaseLevelDisableProps} />
              </div>
            )}
            {BaseLevel && verifyState?.media_authorization ? null : (
              <div className="basis-1/3   md:basis-1/2 lg:basis-1/3">
                {BaseLevel && !verifyState?.national_card ? (
                  <ConfirmCard {...FirstLevelPendingProps} />
                ) : (
                  <ConfirmCard
                    {...(verifyState?.national_card
                      ? FirstLevelEnableProps
                      : FirstLevelDisableProps)}
                  />
                )}
              </div>
            )}

            {BaseLevel &&
            verifyState?.national_card &&
            !verifyState?.bank_account ? (
              <div className="basis-1/3    md:basis-1/2 lg:basis-1/3">
                <ConfirmCard {...SecondLevelPendingProps} />
              </div>
            ) : (
              <div className="basis-1/3    md:basis-1/2 lg:basis-1/3">
                <ConfirmCard
                  {...(verifyState?.bank_account
                    ? SecondLevelEnableProps
                    : SecondLevelDisableProps)}
                />
              </div>
            )}

            <div className="basis-1/3    md:basis-1/2 lg:basis-1/3">
              {BaseLevel &&
              verifyState?.national_card &&
              verifyState?.bank_account &&
              !verifyState?.media_authorization ? (
                <ConfirmCard {...ThirdLevelPendingProps} />
              ) : (
                <ConfirmCard
                  {...(verifyState?.media_authorization
                    ? ThirdLevelEnableProps
                    : ThirdLevelDisableProps)}
                />
              )}
            </div>
            <div className="basis-1/3    md:basis-1/2 lg:basis-1/3">
              {BaseLevel &&
              verifyState?.national_card &&
              verifyState?.bank_account &&
              verifyState?.media_authorization &&
              !verifyState?.guild ? (
                <ConfirmCard {...FourthLevelPendingProps} />
              ) : (
                <ConfirmCard
                  {...(verifyState?.guild
                    ? FourthLevelEnableProps
                    : FourthLevelDisableProps)}
                />
              )}
            </div>
          </div>
        </div>
      )}
      {isLegal ? (
        <div className=" overflow-x-scroll">
          <div className="flex flex-row gap-4 ">
            {/* {BaseLevel && verifyState?.verify_profile ? null : ( */}
            {!verifyState?.verify_signatory ? (
              <div className="basis-1/3   md:basis-1/2 lg:basis-1/3">
                {BaseLevel && !verifyState?.verify_profile ? (
                  <ConfirmCard {...FirstLevelPendingLegalProps} />
                ) : (
                  <ConfirmCard
                    {...(verifyState?.verify_profile
                      ? FirstLevelEnableLegalProps
                      : FirstLevelDisableLegalProps)}
                  />
                )}
              </div>
            ) : null}
            {/* )} */}

            {!verifyState?.verify_signatory ? (
              <>
                {BaseLevel &&
                verifyState?.verify_profile &&
                !verifyState?.verify_official_gazette ? (
                  <div className="basis-1/3    md:basis-1/2 lg:basis-1/3">
                    <ConfirmCard {...SecondLevelPendingLegalProps} />
                  </div>
                ) : (
                  <div className="basis-1/3    md:basis-1/2 lg:basis-1/3">
                    <ConfirmCard
                      {...(verifyState?.verify_official_gazette
                        ? SecondLevelEnableLegalProps
                        : SecondLevelDisableLegalProps)}
                    />
                  </div>
                )}
              </>
            ) : null}

            <div className="basis-1/3    md:basis-1/2 lg:basis-1/3">
              {BaseLevel &&
              verifyState?.verify_profile &&
              verifyState?.verify_official_gazette &&
              !verifyState?.verify_article_of_association ? (
                <ConfirmCard {...ThirdLevelPendingLegalProps} />
              ) : (
                <ConfirmCard
                  {...(verifyState?.verify_article_of_association
                    ? ThirdLevelEnableLegalProps
                    : ThirdLevelDisableLegalProps)}
                />
              )}
            </div>

            <div className="basis-1/3    md:basis-1/2 lg:basis-1/3">
              {BaseLevel &&
              verifyState?.verify_profile &&
              verifyState?.verify_official_gazette &&
              verifyState?.verify_article_of_association &&
              !verifyState?.verify_signatory ? (
                <ConfirmCard {...FourthLevelPendingLegalProps} />
              ) : (
                <ConfirmCard
                  {...(verifyState?.verify_signatory
                    ? FourthLevelEnableLegalProps
                    : FourthLevelDisableLegalProps)}
                />
              )}
            </div>

            <div className="basis-1/3    md:basis-1/2 lg:basis-1/3">
              {BaseLevel &&
              verifyState?.verify_profile &&
              verifyState?.verify_official_gazette &&
              verifyState?.verify_article_of_association &&
              verifyState?.verify_signatory &&
              !verifyState?.verify_undertaking ? (
                <ConfirmCard {...FifthLevelPendingLegalProps} />
              ) : (
                <ConfirmCard
                  {...(verifyState?.verify_undertaking
                    ? FifthLevelEnableLegalProps
                    : FifthLevelDisableLegalProps)}
                />
              )}
            </div>

            <div className="basis-1/3    md:basis-1/2 lg:basis-1/3">
              {BaseLevel &&
              verifyState?.verify_profile &&
              verifyState?.verify_official_gazette &&
              verifyState?.verify_article_of_association &&
              verifyState?.verify_signatory &&
              verifyState?.verify_undertaking &&
              !verifyState?.verify_bank_account ? (
                <ConfirmCard {...SixthLevelPendingLegalProps} />
              ) : (
                <ConfirmCard
                  {...(verifyState?.verify_bank_account
                    ? SixthLevelEnableLegalProps
                    : SixthLevelDisableLegalProps)}
                />
              )}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}
