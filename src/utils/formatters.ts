import { Decimal } from "@prisma/client/runtime"

export const formatToCurrency = (amount: Decimal | undefined) => {
    if(typeof amount === 'undefined') return Number(0).toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })
    return Number(amount).toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })
} 