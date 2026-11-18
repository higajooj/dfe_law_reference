# 1.2.1. Processamento

### a) GET – /parametros_municipais/{codigoMunicipio}/convenio

Consulta os parâmetros do convênio de um município.

### b) GET – /parametros_municipais/{ codigoMunicipio}/{codigoServico}

Consulta as alíquotas, regimes especiais de tributação e deduções/reduções por subitens da lista de serviço.

### c) GET – /parametros_municipais/{codigoMunicipio}/{CPF/CNPJ}

<!-- REVISAR p.03: no original, os itens "c)" e "d)" trazem o mesmo caminho /parametros_municipais/{codigoMunicipio}/{CPF/CNPJ}; conferir se o item "d)" (benefícios) deveria ter outro caminho -->

Consulta as retenções a que um contribuinte tem o dever de recolher para um município.

### d) GET – /parametros_municipais/{codigoMunicipio}/{CPF/CNPJ}

Consulta os benefícios municipais a que um contribuinte tem direito em um município.
