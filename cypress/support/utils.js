export const getFormattedDate = () => {
    const date = new Date(); // data atual no timezone da máquina UTC-3
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return {
        standard: `${year}-${month}-${day}`, // yyyy-mm-dd (ex: 2025-04-01)
        custom: `${day}/${month}/${year}` // dd/mm/yyyy (ex: 01/04/2025)
    };
};

export const formatCurrency = (value) => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
    }).format(Number(value)).replaceAll(/\s/g, ''); // Remove espaços extras
};
