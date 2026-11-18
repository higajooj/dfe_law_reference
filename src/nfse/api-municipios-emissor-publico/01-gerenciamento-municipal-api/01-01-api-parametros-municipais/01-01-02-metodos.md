# 1.1.2 Métodos

***a) GET – /parametros_municipais/{codigoMunicipio}/convenio***

Consulta os parâmetros do convênio de um município.

***b) GET – /parametros_municipais/{ codigoMunicipio }/aliquotas***

Consulta as alíquotas, regimes especiais de tributação e deduções/reduções por subitens da lista de serviço.

***c) GET – /parametros_municipais/{codigoMunicipio}/regimes_especiais***

Consulta as retenções a que um contribuinte tem o dever de recolher para um município.

***d) GET – /parametros_municipais/{codigoMunicipio}/retencoes***

Consulta os benefícios municipais a que um contribuinte tem direito em um município.

<!-- REVISAR p.03: descrições de c) e d) parecem trocadas no original (c) regimes_especiais descrito como retenções; d) retencoes descrito como benefícios municipais); transcrito literalmente -->

***e) GET – /parametros_municipais/{codigoMunicipio}/beneficiomunicipal/ {nBM}***

Consulta os benefícios municipais a que um contribuinte tem direito em um município.

***f) POST – /parametros_municipais/{codigoMunicipio}/beneficiomunicipal/ {idManut}***

Realiza manutenção em um benefício municipal já existente em um município.

***g) POST – /parametros_municipais/{codigoMunicipio}/retencoes/ {idManut}***

Realiza manutenção em uma retenção já existente em um município.

***h) POST – /parametros_municipais/{codigoMunicipio}/regimes_especiais/ {idManut}***

Realiza manutenção em um regime especial de tributação já existente em um município.
