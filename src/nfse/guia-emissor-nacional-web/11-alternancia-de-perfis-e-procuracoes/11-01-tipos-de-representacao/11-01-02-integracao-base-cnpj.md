# 11.1.2 Integração com a Base CNPJ

O sistema permite a alternância entre perfis de acesso com base nos vínculos existentes no cadastro do CNPJ perante a Receita Federal do Brasil.

As seguintes situações são permitidas:

- Responsável Legal para Pessoa Jurídica: quando o CPF utilizado no acesso estiver cadastrado como Responsável Legal de uma empresa, o usuário poderá alternar sua sessão para o CNPJ dessa empresa, passando a operar em nome da pessoa jurídica;
- Pessoa Jurídica para outra Pessoa Jurídica com a mesma raiz de CNPJ: quando houver empresas vinculadas à mesma raiz de CNPJ (os 8 primeiros dígitos do CNPJ), o perfil de uma empresa poderá ser alternado para o perfil de outra empresa pertencente ao mesmo grupo empresarial, observadas as permissões e os vínculos cadastrais existentes.

<!-- p.128 -->

Exemplo: Supondo que o usuário acesse o sistema com um CPF cadastrado como Responsável Legal da empresa 12.345.678/0001-90, ele poderá:

- Alternar do perfil da pessoa física (CPF) para o perfil da empresa 12.345.678/0001-90;
- Caso existam outros estabelecimentos ou empresas com a mesma raiz de CNPJ, como 12.345.678/0002-70 ou 12.345.678/0003-50, poderá alternar entre esses perfis diretamente pelo sistema.

**Importante:** a disponibilidade dos perfis para alternância depende dos vínculos cadastrais existentes no cadastro do CNPJ e das permissões identificadas pelo sistema no momento do acesso.
