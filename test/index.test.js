import {test} from 'node:test';import assert from 'node:assert/strict';
import {capacidades, permitido, exigir} from '../src/index.js';
test('read-only mirror denies destructive operations',()=>{assert.equal(permitido({modo:'espelho',acao:'excluir',permissoes:['excluir']}),false);assert.equal(permitido({modo:'espelho',acao:'ler',permissoes:['ler']}),true);});
test('unknown modes and missing identity permissions deny',()=>{assert.equal(permitido({modo:'principal',acao:'editar'}),false);assert.deepEqual(capacidades('__proto__'),[]);assert.throws(()=>exigir({modo:'unknown',acao:'ler',permissoes:['ler']}),{code:'ACESSO_NEGADO'});});
test('capabilities are detached and offline cannot commit production writes',()=>{capacidades('espelho').push('excluir');assert.deepEqual(capacidades('espelho'),['ler']);assert.equal(permitido({modo:'offline',acao:'editar',permissoes:['editar']}),false);});
