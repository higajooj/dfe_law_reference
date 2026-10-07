<!-- p.12 -->
# 3.10 Final do Processamento do Lote

O processamento do lote pode resultar em:

- Rejeição do Lote – por algum problema que comprometa o processamento do lote;
- Processamento do Lote – o lote foi processado (cStat=128), a validação de cada evento do lote poderá resultar em:
  - Rejeição: o Evento será rejeitado, retornando o código do status e o motivo da rejeição;
  - Evento autorizado sem vinculação do evento à respectiva NFC-e, devido à inexistência da NFC-e no momento do recebimento do Evento (cStat=”136-Evento registrado, mas não vinculado a NFC-e”);

Nota: No caso do evento de EPEC, não existe a possibilidade do retorno "135- Evento registrado e vinculado a NFC-e" porque este evento somente é autorizado se não existir uma NFC-e para a mesma Nota Fiscal (mesma UF, CNPJ emitente, Série e Número).
