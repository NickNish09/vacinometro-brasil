# Vacinômetro Brasil
Vacinômetro para acompanhar a situação da vacinação contra COVID-19 no Brasil.

## Contribuindo
Para contribuir, siga os seguintes passos:

- Faça um fork do repositório e clone o mesmo para o seu local
- Adicione uma origin para o repositório original:

`git remote add upstream https://github.com/NickNish09/vacinometro-brasil.git`

- Crie uma nova branch a partir da `main`

Use o padrão `feature/feature_name` ou `fix/fix_name` para nomear sua branch

Mantenha sua branch atualizada com o rebase:

``` git pull upstream master --rebase ```

``` git push -f ```

Faça um PR pra `main`, seguindo o padrão do template de Pull Request.

*Utilize o padrão de commits para que seu commit seja válido: [Padrão de mensagem de commit](https://gist.github.com/brianclements/841ea7bffdb01346392c)*

```
<type>: <subject>
```
Onde type é um dos seguintes tipos:
- build:
- ci:
- docs:
- feat:
- fix:
- perf:
- refactor:
- style:
- test:

Exemplos:

`docs(changelog): update changelog to beta.5`

`fix(release): need to depend on latest rxjs and zone.js`

Utilize o verbo do commit no imperativo presente (add, update, need). Evite adding, updating...
