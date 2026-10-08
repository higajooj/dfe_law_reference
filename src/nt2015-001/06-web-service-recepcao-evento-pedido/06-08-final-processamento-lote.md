<!-- p.38 -->
# 6.8. Final do Processamento do Lote

O processamento do lote pode resultar em:

- **Rejeição do Lote** – por algum problema que comprometa o processamento do lote;
- **Processamento do Lote** – o lote foi processado (cStat=128), a validação de cada evento do lote poderá resultar em:
  - **Rejeição** – o Evento será descartado, com retorno do código do status do motivo da rejeição;
  - **Recebido pelo Sistema de Registro de Eventos**, com vinculação do evento na NF-e, o Evento será armazenado no repositório do Sistema de Registro de Eventos com a vinculação do Evento à respectiva NF-e (cStat=135);

A UF que recepcionar o Evento deve enviá-lo para o Sistema de compartilhamento do AN – Ambiente Nacional para que o Evento seja distribuído para todos os interessados.
