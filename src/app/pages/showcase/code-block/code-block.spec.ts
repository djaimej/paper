import { TestBed } from '@angular/core/testing';
import { CodeBlock } from './code-block';

describe('CodeBlock', () => {
  const create = () => {
    TestBed.configureTestingModule({ imports: [CodeBlock] });
    return TestBed.createComponent(CodeBlock);
  };

  it('renders the code', () => {
    const fixture = create();
    fixture.componentRef.setInput('code', '<app-button/>');
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('code').textContent).toContain('<app-button/>');
  });

  it('copies to the clipboard and shows feedback', async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    vi.stubGlobal('navigator', { clipboard: { writeText } });

    const fixture = create();
    fixture.componentRef.setInput('code', 'hola');
    fixture.detectChanges();

    (fixture.nativeElement.querySelector('.copy') as HTMLElement).click();
    await Promise.resolve();
    fixture.detectChanges();

    expect(writeText).toHaveBeenCalledWith('hola');
    expect(fixture.nativeElement.querySelector('.copy').textContent).toContain('Copied');
    vi.unstubAllGlobals();
  });
});
