import { screen } from '@testing-library/react';

import { Button } from '@/shared/ui/Button/Button';
import { componentRender } from '@/shared/lib';

describe('Button', () => {
  test('Render with empty props', () => {
    componentRender(<Button>TEST</Button>);
    expect(screen.getByTestId('button')).toHaveClass('main');
  });

  test('Test small size', () => {
    componentRender(<Button size="small">TEST</Button>);
    expect(screen.getByTestId('button')).toHaveClass('small');
    screen.debug();
  });
});
