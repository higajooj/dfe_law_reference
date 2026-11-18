<!-- p.18 -->

# 2.14 Atualizações no grupo de informações relativas às atividades de eventos

Inserção do campo “cMun” no grupo de informações relativas às atividades de eventos de forma a permitir, exclusivamente em operações com os subitens 12.13 e 17.10 do código nacional de tributação (“cTribNac”), a informação do local do evento quando este for diverso do local da prestação do serviço (“cLocPrestacao”).

A necessidade da inclusão se justificou, pois o local de incidência do IBS/CBS para os serviços acima citados é o local do evento e não o local da prestação.

<!-- p.19 -->

| Caminho no XML | Campo | Ele | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|
| NFSe/infNFSe/DPS/infDPS/serv/atvEvento/ | cMun | E | N | 0-1 | 7 | Código do município da localidade do Evento. (Tabela do IBGE) |

**Obs.:** Para os demais casos, o local do evento será o próprio local da prestação do serviço, não havendo necessidade de informação do referido campo.

Por força dessa alteração, passa-se a exigir a informação do grupo “atvEvento” para serviços/operações do subitem 17.10. Assim, as regras de negócio de obrigatoriedade da informação do grupo “atvEvento” foram atualizadas.
