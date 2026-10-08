<!-- p.11 -->
# 2.8. Final do Processamento do Lote

O processamento do lote pode resultar em:

- **Rejeição do Lote** – por algum problema que comprometa o processamento do lote;
- **Processamento do Lote** – o lote foi processado (cStat=128), a validação de cada evento do lote poderá resultar em:
- **Rejeição** – o Evento será descartado, com retorno do código do status do motivo da rejeição;
- **Recebido pelo Sistema de Registro de Eventos, com vinculação do evento na NF-e**, o Evento será armazenado no repositório do Sistema de Registro de Eventos com a vinculação do Evento à respectiva NF-e (cStat=135);

Nota: A SEFAZ autorizadora poderá aceitar o cancelamento fora de prazo, mantendo um código de retorno diferente para estes casos. Nestes casos, deverá ser utilizado o Status “155-Cancelamento homologado fora de prazo”.
