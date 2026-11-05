'use client'

import Link from 'next/link'
import type { ComponentProps, MouseEventHandler } from 'react'
import { trackOfferClick, type OfferId } from '@/lib/analytics'

type TrackedOfferLinkProps = ComponentProps<typeof Link> & {
  offerId: OfferId
  offerName: string
  placement: string
  onClick?: MouseEventHandler<HTMLAnchorElement>
}

export default function TrackedOfferLink({
  offerId,
  offerName,
  placement,
  onClick,
  ...linkProps
}: TrackedOfferLinkProps) {
  const handleClick: MouseEventHandler<HTMLAnchorElement> = (event) => {
    trackOfferClick({ offerId, offerName, placement })
    onClick?.(event)
  }

  return <Link {...linkProps} onClick={handleClick} />
}
