import { render, screen } from '@testing-library/react';
import { AppButton, ThemeButtonType } from 'shared/ui/AppButton/AppButton';

describe('AppButton', () => {
    test('test render', () => {
        render(<AppButton>TEST</AppButton>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
    test('test clear theme', () => {
        render(<AppButton theme={ThemeButtonType.CLEAR}>TEST</AppButton>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
        screen.debug();
    });
});
