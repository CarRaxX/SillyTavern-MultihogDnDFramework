import { describe, expect, it } from 'vitest';
import { t, setLanguage, getCurrentLanguage } from '../src/i18n/index.js';

describe('i18n core infrastructure', () => {
    it('defaults to Spanish (es)', () => {
        expect(getCurrentLanguage()).toBe('es');
        expect(t('common.save')).toBe('Guardar');
        expect(t('hud.partyMembers')).toBe('MIEMBROS DEL GRUPO');
    });

    it('switches language correctly to English (en)', () => {
        setLanguage('en');
        expect(getCurrentLanguage()).toBe('en');
        expect(t('common.save')).toBe('Save');
        expect(t('hud.partyMembers')).toBe('PARTY MEMBERS');
    });

    it('returns fallback or key when translation is missing', () => {
        setLanguage('es');
        expect(t('nonexistent.key', 'Fallback Text')).toBe('Fallback Text');
        expect(t('nonexistent.key')).toBe('nonexistent.key');
    });
});
