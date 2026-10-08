<!-- p.16 -->
# 4.8. Final do Processamento do Lote

O processamento do lote pode resultar em:

- **Rejeição do Lote:** por algum problema que comprometa o processamento do lote;
- **Processamento do Lote:** o lote foi processado (cStat=”128 - Lote de Evento Processado”), e a validação de cada evento do lote poderá resultar em:
  - **Rejeição:** o Evento será rejeitado, retornando do código do status do motivo da rejeição;
  - **Evento Autorizado, com vinculação à respectiva NF-e**: Encontrada a NF-e no banco de dados. Retornar cStat=”135-Evento registrado e vinculado a NF-e”;
  - **Evento Autorizado, sem vinculação à respectiva NF-e:** Não encontrada a NF-e no banco de dados. Retornar cStat=”136-Evento registrado, mas não vinculado a NF-e”;
