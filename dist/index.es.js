import { useEffect, useState } from 'react';
import { jsx, css } from '@emotion/core';
import { Motion, spring } from 'react-motion';

var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

var taggedTemplateLiteral = function (strings, raw) {
  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
};

function useIndexRow(_ref) {
  var duration = _ref.duration,
      size = _ref.size;
  var initialState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  var _useState = useState(initialState),
      _useState2 = slicedToArray(_useState, 2),
      currentIndex = _useState2[0],
      setCurrentIndex = _useState2[1];

  useEffect(function () {
    var timeout = setInterval(function () {
      setCurrentIndex((currentIndex + 1) % size);
    }, duration);
    return function () {
      return clearTimeout(timeout);
    };
  }, [currentIndex, duration, size]);

  return currentIndex;
}

var _templateObject = taggedTemplateLiteral(['\n    width: ', 'px;\n    height: ', 'px;\n    box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.55);\n    overflow: hidden;\n    position: relative;\n'], ['\n    width: ', 'px;\n    height: ', 'px;\n    box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.55);\n    overflow: hidden;\n    position: relative;\n']);

var containerCss = function containerCss(_ref) {
  var width = _ref.width,
      height = _ref.height;
  return css(_templateObject, width, height);
};

function Roll(_ref2) {
  var render = _ref2.render,
      numberOfItems = _ref2.numberOfItems,
      width = _ref2.width,
      height = _ref2.height,
      _ref2$duration = _ref2.duration,
      duration = _ref2$duration === undefined ? 3000 : _ref2$duration;

  var currentIndex = useIndexRow({ duration: duration, size: numberOfItems }, 0);

  return jsx(
    'div',
    { css: containerCss({ width: width, height: height }) },
    render(currentIndex)
  );
}

var _templateObject$1 = taggedTemplateLiteral(['\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 0;\n'], ['\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 0;\n']),
    _templateObject2 = taggedTemplateLiteral(['\n    z-index: 1;\n'], ['\n    z-index: 1;\n']),
    _templateObject3 = taggedTemplateLiteral(['\n    z-index: 2;\n'], ['\n    z-index: 2;\n']);

var imgCss = css(_templateObject$1);

var isPreviousCss = css(_templateObject2);

var isCurrentCss = css(_templateObject3);

function ItemRoll(_ref) {
  var source = _ref.source,
      isCurrent = _ref.isCurrent,
      isPrevious = _ref.isPrevious,
      css$$1 = _ref.css;

  return jsx(
    Motion,
    {
      defaultStyle: { x: 0 },
      style: {
        x: spring(isCurrent ? 0 : isPrevious ? 600 : -600)
      }
    },
    function (_ref2) {
      var opacity = _ref2.opacity,
          x = _ref2.x;
      return jsx('img', {
        css: [imgCss, isPrevious && isPreviousCss, isCurrent && isCurrentCss, css$$1],
        src: source,
        style: { opacity: opacity, transform: 'translateX(' + x + 'px)' },
        alt: 'roll item'
      });
    }
  );
}

export default Roll;
export { ItemRoll };
//# sourceMappingURL=index.es.js.map
