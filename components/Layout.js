import { Header } from "./Header";
import { Footer } from "./Footer";
import { Bounded } from "./Bounded";

export const Layout = ({
  navigation,
  settings,
  withHeaderDivider,
  withProfile,
  withSignUpForm,
  children,
}) => {
  return (
    <div>
      <Header
        withProfile={withProfile}
        withDivider={withHeaderDivider}
        navigation={navigation}
        settings={settings}
      />
      <Bounded>{children}</Bounded>
      <Footer withSignUpForm={withSignUpForm} settings={settings} />
    </div>
  );
};
