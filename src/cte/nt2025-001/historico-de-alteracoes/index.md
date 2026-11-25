<!-- p.03 -->

# Histórico de Alterações / Cronograma

| Versão | Histórico de atualizações | Implantação Homologação | Implantação Produção |
|---|---|---|---|
| **1.00** | • Previsão das informações do IBS/CBS no CTe<br>• Alteração de regras do CTeOS Transporte Valores exigir UF e Mun Fim<br>• Alteração das regras do CTe Simplificado para limitar em apenas um fim de prestação<br>• Alteração no leiaute do Dutoviário<br>• Exceção para não exigir evento de prestação em desacordo na substituição de tomador do EX<br>• Preparação das Expressões Regulares do CNPJ Alfa<br>• Eliminação da SVC para GTVe<br>• Inclusão da DCe nos documentos originários<br>• Ampliação do código de retorno das mensagens suportar até 4 dígitos | | |
| **1.01** | • Correções e orientações sobre aplicação das regras de validação<br>• Renumeração das regras de rejeição<br>• Ajuste no grupo de Tributação regular<br>• Ajuste na regra do CTe Complementar para Multimodal | | |
| **1.02** | • Ajustes nas regras do crédito presumido e tributação regular<br>• Ajuste nas regras para Crédito Presumido Condição Suspensiva no grupo do crédito presumido | | |
| **1.03** | • Ajustes nas regras de compras governamentais, redução de alíquota e valores de IBS/CBS<br>• Correção no schema dos eventos tipos básicos | | |
| **1.04** | • Ajustes em regras de validação e mensagens | | |
| **1.05** | • Ajuste na regra de compras governamentais e exigência do grupo de tributação para SN<br>• Novo grupo de informações da tributação para compras governamentais | | |
| **1.05 a** | • Correção de datas no texto da introdução | | |
| **1.05b** | • Correção em nome de campos citados nas RVs | | |
| **1.06** | • Novas regras de validação complementares<br>• Inclusão do campo vIBS<br>• Ajuste na expressão regular do qrcode prevendo o CNPJ Alfa | | |
| **1.07** | • Campo vIBS passa a ser obrigatório no schema | | |
| **1.08** | • Alteração da regra de validação 004-a para verificar no cClassTrib sua aplicabilidade ao modelo de DFe<br>• Correção na posição do campo vIBS no schema<br>• Correção na obrigatoriedade das regras 038 e 044 | | |
| **1.08 a** | • Ajuste na redação da regra de total geral do DFe | | |
| **1.09** | <!-- p.04 -->• Ajustes na regra do diferimento<br>• Altera data de exigência do grupo IBSCBS em homologação para 03/11 | | |
| **1.10** | • Exclusão do grupo de informações do crédito presumido por não se aplicar aos cClassTrib associados ao DFe<br>• Criação do indicador de doação e do grupo de Estorno de crédito vinculado a um novo indicador na tabela cClassTrib para esta finalidade | | |
| **1.11a** | • Correção na regra de validação do CBS, permitindo alíquota zero para a CBS em operações específicas dentro de áreas incentivadas.<br>• Ajuste na explicação da regra de valor do tributo negativo | | |
| **1.12** | • Esclarecimento do preenchimento do vTotDFe | | |
| **1.12 a** | • Correção da validação da redução de alíquota | Já implantado | Já implantado |
| **1.13** | • Criação de regra específica para exigir vTotDFe quando informado IBSCBS | 03/02/2026 | 02/03/2026 |
| **1.14** | • Inclusão de campos do tipo de operação e DFe referenciado nas compras governamentais | | |
| **1.14 a** | • Ajuste nas mensagens de validação das compras gov | 06/04/2026 | 04/05/2026 |
| <mark>**1.14b**</mark> | <mark>• Novas regra de validação para o CTe Aquaviário de cabotagem</mark> | <mark>04/05/2026</mark> | <mark>Até 15/05/2026</mark> |

**Observação**: No ambiente de produção, os campos ficam à disposição desde 20 de outubro, validados apenas se informados. No ambiente de homologação os campos da reforma tributária estarão à disposição desde julho, validados apenas se informados.
