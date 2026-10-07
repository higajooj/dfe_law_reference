<!-- p.8 -->
# 3 Leiaute da NF-e (Modelo 55 e 65)

## Grupo ZF. Informações de Produtos da Agricultura, Pecuária e Produção Florestal

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| **423k** | **ZF01** | **agropecuario** | **Informações de produtos da agricultura, pecuária e produção Florestal** | **G** | **A01** | | **0-1** | | |
| **423k.1** | **ZF02** | **defensivo** | **Defensivos Agrícolas** | **CG** | **ZF01** | | **1-20** | | |
| 423k.2 | ZF03 | nReceituario | Número da receita ou receituário do agrotóxico / defensivo agrícola. | E | ZF02 | C | 1-1 | 1-30 | Informar o número da receita ou receituário de aplicação do defensivo |
| 423k.2a | ZF03a | CPFRespTec | CPF do Responsável Técnico pela emissão do receituário. | E | ZF02 | N | 1-1 | 11 | Informar o CPF do Responsável Técnico legalmente habilitado para emissão do receituário agrícola, conforme exigências federais e estaduais, como engenheiro agrônomo, engenheiro florestal ou técnico agrícola. |
| **423k.3** | **ZF04** | **guiaTransito** | **Guia de Trânsito** | **CG** | **ZF01** | | **1-1** | | |
| 423k.4 | ZF05 | tpGuia | Tipo da Guia | E | ZF04 | N | 1-1 | 1 | 1 - GTA - Guia de Trânsito Animal; 2 - TTA - Termo de Trânsito Animal; 3 - DTA - Documento de Transferência Animal; 4 - ATV - Autorização de Trânsito Vegetal; 5 - PTV - Permissão de Trânsito Vegetal; 6 - GTV - Guia de Trânsito Vegetal; 7 - Guia Florestal (DOF, SisFlora - PA e MT ou SIAM - MG). |
| 423k.5 | ZF06 | UFGuia | UF de emissão | E | ZF04 | C | 1-1 | 2 | UF de emissão da guia |
| 423k.6 | ZF07 | serieGuia | Série da Guia | E | ZF04 | C | 0-1 | 1-9 | Informar sempre que houver a série da guia |
| <!-- p.9 -->423k.7 | ZF08 | nGuia | Número da Guia | E | ZF04 | N | 1-1 | 1-9 | Número da Guia |
