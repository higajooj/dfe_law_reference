<!-- p.11 -->

# 6 Regras de validação associadas ao vale pedágio

**Validações das Regras de Negócio MDF-e**

| # | Regra de Validação | Crítica | Msg | Efeito |
|---|---|---|---|---|
| # | Se modal rodoviário e informado o grupo de informações do vale pedágio (infANTT/valePed).<br>A informação da categoria de combinação veicular deverá ser preenchida (tag: categCombVeic) | Obrig. | 731 | Rej. |
| # | Se modal Rodoviário e informado grupo de informações do vale pedágio (grupo: valePed):<br>Rejeitar se o CNPJ do fornecedor do vale pedágio informado estiver inválido (dígito de controle, zeros) | Obrig. | 732 | Rej. |
| # | Se modal rodoviário, informado grupo de informações do vale pedágio (grupo: valePed):<br>Para cada dispositivo deverá ser verificado se o CNPJ do Fornecedor do Vale Pedágio existe na base de dados compartilhada da ANTT. | Obrig.. | 733 | Rej. |
| # | Se modal rodoviário, informado grupo de informações do vale pedágio (grupo: valePed):<br>Rejeitar se o CPF ou CNPJ do responsável pelo pagamento do vale pedágio informado estiver inválido (dígito de controle, zeros) | Obrig. | 734 | Rej. |

Observação: as regras de validação passam a ser aplicadas em produção no dia 07/06/2021
