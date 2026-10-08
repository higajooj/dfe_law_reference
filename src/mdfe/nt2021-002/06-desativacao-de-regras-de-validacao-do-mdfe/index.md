<!-- p.12 -->
# 6 Desativação de regras de validação do MDF-e

As seguintes regras de validação deixam de ser aplicadas:

| Código | Regra de Validação | Crítica | Msg | Efeito |
|---|---|---|---|---|
| G019 | ~~Se tipo emitente informado for igual a Prestador de Serviço de Transporte (tpEmit=1) ou transportador que emitirá CT-e globalizado (tpEmit=3), modal = Rodoviário e CNPJ do proprietário do veículo não for informado ou for igual ao CNPJ do Emitente do MDF-e:<br>A informação do tipo de transportador (tpTransp) deverá ser diferente de TAC (2)~~ | ~~Obrig.~~ | ~~457~~ | ~~Rej.~~ |
| G020 | ~~Se tipo emitente informado for igual a Transportador de Carga Própria (tpEmit=2), modal = Rodoviário e CNPJ do proprietário do veículo não for informado ou for igual ao CNPJ do Emitente do MDF-e:<br>A informação do tipo de transportador (tpTransp) não deverá ser preenchida~~ | ~~Obrig.~~ | ~~458~~ | ~~Rej.~~ |
| G021 | ~~Se tipo emitente informado for igual a Transportador de Carga Própria (tpEmit=2), modal = Rodoviário e CNPJ do proprietário do veículo for informado diferente do CNPJ do Emitente do MDF-e:<br>A informação do tipo de transportador (tpTransp) deverá ser preenchida com TAC (2)~~ | ~~Obrig.~~ | ~~454~~ | ~~Rej.~~ |

> **Revogado/Descontinuado:** as regras G019, G020 e G021 estão riscadas no original (texto em vermelho), indicando que deixam de ser aplicadas, conforme o texto introdutório desta seção.
