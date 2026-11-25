<!-- p.03 -->

# 1 Introdução

Esta Nota Técnica tem por objetivo disciplinar as adequações adicionais nos leiautes do CTe, necessárias à implementação das disposições decorrentes da Reforma Tributária do Consumo, regulamentada pela Lei Complementar nº 214/2025, aplicáveis às operações realizadas por contribuintes optantes pelo Simples Nacional.

As alterações apresentadas visam viabilizar a apuração assistida do Simples Nacional, por meio da captura estruturada, em nível de item do documento fiscal eletrônico, das informações indispensáveis ao cálculo da Receita Bruta do Simples Nacional (RBSN) e da receita bruta acumulada nos doze meses antecedentes ao mês anterior ao do período de apuração (RBT12), bem como ao cálculo do Imposto sobre Bens e Serviços (IBS) e da Contribuição sobre Bens e Serviços (CBS) no âmbito desse regime.

Para atender a esse objetivo, esta Nota Técnica estabelece a inclusão de novos campos e regras de validação destinados a identificar:

- a situação cadastral e o enquadramento do contribuinte no âmbito do Simples Nacional;
- a adequada classificação tributária das operações para fins de incidência do IBS e da CBS;
- informações do IBS e da CBS para tributação pelo Simples Nacional.

Adicionalmente, esta Nota Técnica cria o evento fiscal específico denominado “**Evento de Tributação do Simples Nacional**” (tpEvent = **412140**). Este evento será gerado **automaticamente** pela Administração Tributária, com a finalidade de apoiar ações de conformidade das informações fiscais.
