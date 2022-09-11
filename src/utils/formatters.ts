import { Decimal } from "@prisma/client/runtime"

export const formatToCurrency = (amount: Decimal) => {
    return Number(amount).toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })
} 