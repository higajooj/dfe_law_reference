<!-- p.16 -->
# 6.3.9 Final do processamento do Lote

O processamento do lote pode resultar em:

1. **Rejeição do Lote** – por algum problema que comprometa o processamento do lote;
2. **Processamento do Lote** – o lote foi processado (cStat=128), a validação de cada evento do lote poderá resultar em:
   1. **Rejeição** – o Evento será descartado, com retorno do código do status do motivo da rejeição;
   2. **Recebido pelo Sistema de Registro de Eventos, com vinculação do evento na NF-e**, o Evento será armazenado no repositório do Sistema de Registro de Eventos com a vinculação do Evento à respectiva NF-e (cStat=135);
   3. **Recebido pelo Sistema de Registro de Eventos – vinculação do evento à respectiva NF-e prejudicada** – o Evento será armazenado no repositório do Sistema de Registro de Eventos, a vinculação do evento à respectiva NF-e fica prejudicada face à inexistência da NF-e no momento do recebimento do Evento (cStat=136);
